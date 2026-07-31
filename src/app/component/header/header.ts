import { Component, Injectable } from '@angular/core';

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
  

  quickLink(link:string){
    window.open(link);
  }

  openMenu(){
    let burgerPopup = document.getElementById('overlay') as HTMLDivElement;
    burgerPopup.style.display = "flex";
  }

  closeMenu(){
   // this.burgerPopup.style.display = "none";
  }
}
