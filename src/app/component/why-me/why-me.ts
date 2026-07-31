import { Component, HostListener } from '@angular/core';
import Language from "../../shared/language/languages.json";

@Component({
  selector: 'app-why-me',
  imports: [],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {
  languageCache = Language.DE;

  @HostListener('document:click', ['$event'])
    closeMenu(event: MouseEvent){
      this.ngOnInit();
    }

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.changeLanguage(selectedLanguageID);
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
