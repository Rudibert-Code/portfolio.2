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

  controlPopup(X:string){
    const targetElement = document.getElementById('user-message') as HTMLDialogElement;
    if (X === 'open') {
      targetElement.showModal();
      targetElement.style.display="flex";
    } else if(X === 'close' && targetElement.open){
      targetElement.close();
      targetElement.style.display="none";
    } else{
      return
    }
  }

  @HostListener('document:click', ['$event'])
    outsideClick(event: MouseEvent){  
    const popup = document.getElementById('user-message') as HTMLDialogElement;
    const clickedElement = event.target as HTMLElement;

    if (clickedElement != popup && !popup.contains(clickedElement)) {
      return this.controlPopup('close')
    } else{
      return
    }
  }
}
