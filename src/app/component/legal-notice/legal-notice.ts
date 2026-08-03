import { Component, inject, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguagePopup } from "../../component/language-popup/language-popup";
import Language from "../../shared/language/languages.json";

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  popup = inject(LanguagePopup);

  languageCache = Language.DE;

  @HostListener('document:click', ['$event'])
    closeMenu(event: MouseEvent){
      this.ngOnInit();
    }

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.changeLanguage(selectedLanguageID);
    let languageString = localStorage.getItem("test") ?? '{}';
    console.table(JSON.parse(languageString))
  }

  changeLanguage(languageID:string){
    switch (languageID) {
      case 'DE':
        this.languageCache = Language.DE;
        break;

      case 'EN':
        this.languageCache = Language.EN;
        break;
      
      default:
        this.languageCache = Language.EN;
        break;
    }
  }
}
