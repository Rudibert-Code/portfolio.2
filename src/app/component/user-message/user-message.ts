import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-message',
  imports: [],
  templateUrl: './user-message.html',
  styleUrl: './user-message.scss',
})
export class UserMessage {

  closePopup(){
    let targetElement = document.getElementById('user-message') as HTMLDivElement;
    targetElement.style.display = "none";
  }

  @HostListener('document:click', ['$event'])
    outsideClick(event: MouseEvent){  
    const popup = document.getElementById('user-message') as HTMLDivElement;
    const clickedElement = event.target as HTMLElement;

    if (clickedElement != popup && !popup.contains(clickedElement)) {
      return this.closePopup()
    } else{
      return
    }
  }
}
