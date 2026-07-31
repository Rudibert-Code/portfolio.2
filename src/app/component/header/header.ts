import { Component, Injectable, HostListener } from '@angular/core';

let popupOpen:boolean = false;

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
  @HostListener('document:click', ['$event'])
  closeMenu(event: MouseEvent){
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
}
