import { Component, Injectable, HostListener } from '@angular/core';
import Language from "../../shared/language/languages.json";

let popupOpen:boolean = false;
//let languageCache:string[]=[];

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-language-popup',
  imports: [],
  templateUrl: './language-popup.html',
  styleUrl: './language-popup.scss',
})
export class LanguagePopup {
  languageCache = Language.DE;

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.changeLanguage(selectedLanguageID);
    this.markedLanguage(selectedLanguageID);
  }

  markedLanguage(ID:string){
    const DE = document.getElementById('DE') as HTMLDivElement;
    const EN = document.getElementById('EN') as HTMLDivElement;
    let selected = document.getElementById(ID) as HTMLDivElement;
    DE.classList.remove('marked');
    EN.classList.remove('marked');
    selected.classList.add('marked');
    this.changeLanguage(ID);
  }

  @HostListener('document:click', ['$event'])
    closeMenu(event: MouseEvent){
    const overlay = document.getElementById('popup') as HTMLDivElement;
    const burgerMenu = document.getElementById('burger-menu') as HTMLDivElement;
    const clickedElement = event.target as HTMLElement;

    if (popupOpen && clickedElement != overlay && clickedElement != burgerMenu && !overlay.contains(clickedElement)) {
      return this.toggleMenu()
    } else{
      return
    }
  }
  
  toggleMenu(){
    const overlay = document.getElementById('popup') as HTMLDivElement;
    if (popupOpen == true) {
      overlay.style.display = "none";
      popupOpen = false;
    } else{
      overlay.style.display = "flex";
      popupOpen = true;
    }
  }

  changeLanguage(languageID:string){
    localStorage.setItem("language", languageID);
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
    let selectedLanguage = JSON.stringify(this.languageCache)
    localStorage.setItem("test", selectedLanguage);
    
  }
}
