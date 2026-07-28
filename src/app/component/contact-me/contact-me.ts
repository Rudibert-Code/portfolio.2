import { Component } from '@angular/core';

let inputComplete:boolean = false;

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  checkbox(state:string){
    let checkbox = document.getElementById('checkbox') as HTMLDivElement;
    checkbox.classList.toggle("checkbox");
    checkbox.classList.remove("error");
    checkbox.classList.toggle(state);
  }

  sendEmail(){
    this.checkForm();
  }

  checkForm(){
    let userName = document.getElementById('input-name') as HTMLInputElement;
    let userEmail = document.getElementById('input-email') as HTMLInputElement;
    let userMessage = document.getElementById('input-text') as HTMLTextAreaElement;
    let checkboxState = document.getElementById('checkbox') as HTMLDivElement;
    let sendButton = document.getElementById('send-button') as HTMLAnchorElement;
    this.isNameEntered(userName);
    this.isEmailEntered(userEmail);
    this.isMessageEntered(userMessage);
    this.isCheckbox(checkboxState);

    if (this.isNameEntered(userName) && this.isEmailEntered(userEmail) && this.isMessageEntered(userMessage) && this.isCheckbox(checkboxState)) {
      sendButton.classList.add("button-base");
      inputComplete = true;
    }
  }

  isNameEntered(userName:HTMLInputElement){
    if (userName.value.length >= 3 && !userName.value.includes("     Your name") && !userName.value.includes("     Your name is required")) {
      return true;
    } else{
      userName.classList.add("input_error");
      userName.value="     Your name is required";
      return false;
    }
  }

  isEmailEntered(userEmail:HTMLInputElement){
    if (userEmail.value.length >= 5 && userEmail.value.includes("@") && userEmail.value.includes(".")) {
      return true;
    } else{
      userEmail.classList.add("input_error");
      userEmail.value="     Your email is required";
      return false;
    }
  }

  isMessageEntered(userMessage:HTMLTextAreaElement){
    if (userMessage.value.length >= 3 && userMessage.value != "     Your message..." && userMessage.value != "     Your message is required") {
      return true;
    } else{
      userMessage.classList.add("input_error");
      userMessage.value="     Your message is required";
      return false;
    }
  }

  isCheckbox(check:HTMLDivElement){
    if (check.classList.contains("clicked")) {
      return true;
    } else{
      check.classList.add("error")
      return false;
    }
  }

  resetInputState(inputArea:string){
    let resetInputArea = document.getElementById(inputArea) as HTMLElement;
    resetInputArea.classList.remove("input_error");
  }
}
