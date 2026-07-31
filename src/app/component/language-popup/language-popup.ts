import { Component } from '@angular/core';

@Component({
  selector: 'app-language-popup',
  imports: [],
  templateUrl: './language-popup.html',
  styleUrl: './language-popup.scss',
})
export class LanguagePopup {
  markedLanguage(ID:string){
    const DE = document.getElementById('DE') as HTMLDivElement;
    const EN = document.getElementById('EN') as HTMLDivElement;
    let selected = document.getElementById(ID) as HTMLDivElement;
    DE.classList.remove('marked');
    EN.classList.remove('marked');
    selected.classList.add('marked');
  }
}
