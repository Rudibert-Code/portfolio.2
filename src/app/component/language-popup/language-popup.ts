import { Component, Injectable, HostListener } from '@angular/core';

let popupOpen:boolean = false;

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
  markedLanguage(ID:string){
    const DE = document.getElementById('DE') as HTMLDivElement;
    const EN = document.getElementById('EN') as HTMLDivElement;
    let selected = document.getElementById(ID) as HTMLDivElement;
    DE.classList.remove('marked');
    EN.classList.remove('marked');
    selected.classList.add('marked');
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
}
