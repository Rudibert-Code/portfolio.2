import { Component, Injectable, HostListener } from '@angular/core';
import Language from "../../shared/language/languages.json";

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
  languageCache = Language.DE;

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.changeLanguage(selectedLanguageID);
  }

  changeLanguage(languageID:string){
    switch (languageID) {
      case 'DE':
        this.languageCache = Language.DE;
        break;

      case 'EN':
        this.languageCache = Language.EN;
        break;
      
      default:
        this.languageCache = Language.EN;
        break;
    }
  }

  controlPopup(state:string){
    const targetElement = document.getElementById('user-message') as HTMLDialogElement;
    if (state === 'open') {
      targetElement.showModal();
      targetElement.style.display="flex";
    } else if(state === 'close' && targetElement.open){
      targetElement.close();
      targetElement.style.display="none";
    } else{
      return
    }
  }

  @HostListener('document:click', ['$event'])
    outsideClick(event: MouseEvent){  
    const popup = document.getElementById('user-message') as HTMLDialogElement;
    this.ngOnInit();

    if (popup.open) {
      console.log("YES")
      return this.controlPopup('close')
    } else{
      return
    }
  }
}
