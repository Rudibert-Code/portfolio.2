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
    if (popupOpen == true) {
      burgerPopup.style.display = "none";
      popupOpen = false;
    } else{
      burgerPopup.style.display = "flex";
      popupOpen = true;
    }
  }

  markedLanguage(ID:string){
    const DE = document.getElementById('overlay-DE') as HTMLDivElement;
    const EN = document.getElementById('overlay-EN') as HTMLDivElement;
    let selected = document.getElementById(ID) as HTMLDivElement;
    DE.classList.remove('marked');
    EN.classList.remove('marked');
    selected.classList.add('marked');
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
