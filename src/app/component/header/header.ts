import { Component, Injectable, HostListener } from '@angular/core';
import Language from "../../shared/language/languages.json";

let popupOpen:boolean = false;
let languageCache:string[]=[];

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  languageCache = Language.DE;

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.markedLanguage(selectedLanguageID);
    this.changeLanguage(selectedLanguageID);
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: MouseEvent){
    this.ngOnInit();

    const overlay = document.getElementById('overlay') as HTMLDivElement;
    const menu = document.getElementById('burger-menu') as HTMLImageElement;
    const clickedElement = event.target as HTMLElement;

    if (popupOpen && clickedElement != overlay && clickedElement != menu && !overlay.contains(clickedElement)) {
      return this.toggleMenu()
    } else{
      return
    }
  }
  
  quickLink(link:string){
    window.open(link);
  }

  toggleMenu(){
    const burgerPopup = document.getElementById('overlay') as HTMLDivElement;
    const userImage = document.getElementById('user-img-mobile') as HTMLImageElement;
    if (popupOpen == true) {
      userImage.style.opacity = "1.0";
      popupOpen = false;
      burgerPopup.style.display = "none";
    } else if (popupOpen == false){
      userImage.style.opacity = "0.0";
      popupOpen = true;
      burgerPopup.style.display = "flex";
    }
  }

  markedLanguage(ID:string){
    const DE = document.getElementById('overlay-DE') as HTMLDivElement;
    const EN = document.getElementById('overlay-EN') as HTMLDivElement;
    DE.classList.remove('marked');
    EN.classList.remove('marked');
    this.setMark(ID);
    this.changeLanguage(ID);
  }

  setMark(ID:string){
    switch (ID) {
      case 'DE':
        let selectedDE = document.getElementById('overlay-DE') as HTMLDivElement;
        selectedDE.classList.add('marked');
        break;
      case 'EN':
        let selectedEN = document.getElementById('overlay-EN') as HTMLDivElement;
        selectedEN.classList.add('marked');
        break;
      default:
        let selectedDefault = document.getElementById('overlay-EN') as HTMLDivElement;
        selectedDefault.classList.add('marked');
        break;
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
