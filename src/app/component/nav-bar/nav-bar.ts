import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  markElement(id:string){
    let targetElement = document.getElementById(id) as HTMLParagraphElement;
    this.clearAllElements();
    targetElement.classList.toggle('marked');
  }
  
  clearAllElements(){
    let e1 = document.getElementById('why-me') as HTMLParagraphElement;
    let e2 = document.getElementById('skills') as HTMLParagraphElement;
    let e3 = document.getElementById('projects') as HTMLParagraphElement;
    let e4 = document.getElementById('contacts') as HTMLParagraphElement;
    e1.classList.remove('marked');
    e2.classList.remove('marked');
    e3.classList.remove('marked');
    e4.classList.remove('marked');
  }
}
