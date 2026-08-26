import { Component, Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-user-message',
  imports: [],
  templateUrl: './user-message.html',
  styleUrl: './user-message.scss',
})
export class UserMessage {

  togglePopup(){
    let targetElement = document.getElementById('user-message') as HTMLDialogElement;
    if (targetElement.style.display == "flex") {
      targetElement.style.display = "none";
    } else{
      targetElement.style.display = "flex"
    }
    
  }

  @HostListener('document:click', ['$event'])
    outsideClick(event: MouseEvent){  
    const popup = document.getElementById('user-message') as HTMLDialogElement;
    const clickedElement = event.target as HTMLElement;

    if (clickedElement != popup && !popup.contains(clickedElement)) {
      return this.togglePopup()
    } else{
      return
    }
  }
}
