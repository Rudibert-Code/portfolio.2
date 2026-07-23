import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  // markiert Navigationselement ...
  markElement(id:string,type:string){
    let targetElement = document.getElementById(id) as HTMLParagraphElement;
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
    let e1 = document.getElementById('why-me') as HTMLParagraphElement;
    let e2 = document.getElementById('skills') as HTMLParagraphElement;
    let e3 = document.getElementById('projects') as HTMLParagraphElement;
    let e4 = document.getElementById('contacts') as HTMLParagraphElement;
    e1.classList.remove('marked');
    e2.classList.remove('marked');
    e3.classList.remove('marked');
    e4.classList.remove('marked');
  }

  clearLanguage(){
    let l1 = document.getElementById('DE') as HTMLParagraphElement;
    let l2 = document.getElementById('EN') as HTMLParagraphElement;
    l1.classList.remove('marked');
    l2.classList.remove('marked');
  }
}
