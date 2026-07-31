import { Component, Injectable } from '@angular/core';


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
  // markiert Navigationselement ...
  markElement(id:string,type:string){
    let targetElement = document.getElementById(id) as HTMLAnchorElement;
    switch (type) {
      case 'nav':
        this.clearNavigation();
        break;
      case 'lan':
        this.clearLanguage();
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
  clearLanguage(){
    let l1 = document.getElementById('DE') as HTMLParagraphElement;
    let l2 = document.getElementById('EN') as HTMLParagraphElement;
    l1.classList.remove('marked');
    l2.classList.remove('marked');
  }
}
