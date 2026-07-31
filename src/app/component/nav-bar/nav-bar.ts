import { Component, Injectable } from '@angular/core';
import Language from '../../shared/language/languages.json'

let languageCache:string = 'DE';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  navText = Language.DE;

  // markiert Navigationselement ...
  markElement(id:string,type:string){
    let targetElement = document.getElementById(id) as HTMLAnchorElement;
    switch (type) {
      case 'nav':
        this.clearNavigation();
        break;
      case 'lan':
        this.clearLanguage(id);
        break;
      default:
        break;
    }
    targetElement.classList.toggle('marked');
  }
  
  // löscht Markierung auf Navigationselement ...
  clearNavigation(){
    let e1 = document.getElementById('nav-why-me') as HTMLParagraphElement;
    let e2 = document.getElementById('nav-skills') as HTMLParagraphElement;
    let e3 = document.getElementById('nav-projects') as HTMLParagraphElement;
    let e4 = document.getElementById('nav-contacts') as HTMLParagraphElement;
    e1.classList.remove('marked');
    e2.classList.remove('marked');
    e3.classList.remove('marked');
    e4.classList.remove('marked');
  }

  // löscht Markierung auf Sprach-Toggle ...
  clearLanguage(languageID:string){
    let l1 = document.getElementById('DE') as HTMLParagraphElement;
    let l2 = document.getElementById('EN') as HTMLParagraphElement;
    l1.classList.remove('marked');
    l2.classList.remove('marked');

    this.changeLanguage(languageID);
  }

  changeLanguage(languageID:string){
    switch (languageID) {
      case 'DE':
        this.navText = Language.DE;
        break;

      case 'EN':
        this.navText = Language.EN;
        break;
      
      default:
        this.navText = Language.EN;
        break;
    }
  }
}
