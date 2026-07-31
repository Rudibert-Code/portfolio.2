import { Injectable, signal } from '@angular/core';
import Language from './languages.json';

export type LanguageKey = keyof typeof Language;

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly currentLanguage = signal(Language.DE);

  changeLanguage(languageID: string): void {
    const language = languageID as LanguageKey;
    this.currentLanguage.set(Language[language] ?? Language.EN);
  }
}