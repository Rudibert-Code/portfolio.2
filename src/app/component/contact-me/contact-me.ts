import { Component, inject, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UserMessage } from "../user-message/user-message";
import Language from "../../shared/language/languages.json";

interface User{
  name:string,
  email:string,
  message:string,
  checkbox:boolean
}

@Component({
  selector: 'app-contact-me',
  imports: [RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  popup = inject(UserMessage);

  newUser:User[]=[
    {
      name:"",
      email:"",
      message:"",
      checkbox:false
    }
  ]

  languageCache = Language.DE;

  @HostListener('document:click', ['$event'])
    closeMenu(event: MouseEvent){
      this.ngOnInit();
    }

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

  markIncompletion(){
    let checkboxState = document.getElementById('checkbox') as HTMLDivElement;
    let userName = document.getElementById('reminder_name') as HTMLParagraphElement;
    let userEmail = document.getElementById('reminder_email') as HTMLParagraphElement;
    let userMessage = document.getElementById('reminder_message') as HTMLParagraphElement;

    if (this.newUser[0].name == "") {
      userName.style.opacity = "1.0" 
    }
    if (this.newUser[0].email == "") {
      userEmail.style.opacity = "1.0"
    }
    if (this.newUser[0].message == "") {
      userMessage.style.opacity = "1.0"
    }
    if (this.newUser[0].checkbox == false) {
      checkboxState.classList.add("error");  
    }
  }

  checkSingleInput(ID:string){ 
    switch (ID) {
      case 'reminder_name':
        this.markInput(1)
        break;
      case 'reminder_email':
        this.markInput(2)
        break;
      case 'reminder_message':
        this.markInput(3)
        break;
      default:
        break;
    }
  }

  markInput(ID:number){
    let errorName = document.getElementById('reminder_name') as HTMLInputElement;
    let errorEmail = document.getElementById('reminder_email') as HTMLInputElement;
    let errorMessage = document.getElementById('reminder_message') as HTMLInputElement;

    if (ID == 1 && !this.isNameEntered(document.getElementById('input-name') as HTMLInputElement)) {
      errorName.style.opacity = "1.0";
    } else if (ID == 2 && !this.isEmailEntered(document.getElementById('input-email') as HTMLInputElement)) {
      errorEmail.style.opacity = "1.0";
    } else if (ID == 3 && !this.isMessageEntered(document.getElementById('input-text') as HTMLTextAreaElement)) {
      errorMessage.style.opacity = "1.0";
    }
  }

  checkFormCompletion(){
    let sendButton = document.getElementById('send-button') as HTMLAnchorElement;

    if (this.newUser[0].name && this.newUser[0].email && this.newUser[0].message && this.newUser[0].checkbox) {
      sendButton.classList.remove("button-base-blocked");
      sendButton.classList.add("button-base");
    } else{
      sendButton.classList.add("button-base-blocked");
      sendButton.classList.remove("button-base");
    }
  }

  isNameEntered(userName:HTMLInputElement){
    if (userName.value.length >= 3 && !userName.value.includes("Your name") && !userName.value.includes("Your name is required")) {
      this.newUser[0].name = userName.value;
      return true;
    } else{
      this.newUser[0].name = "";
      return false;
    }
  }

  isEmailEntered(userEmail:HTMLInputElement){
    if (userEmail.value.length >= 5 && userEmail.value.includes("@") && userEmail.value.includes(".") && userEmail.value.charAt((userEmail.value.length) - 1) != "." && userEmail.value.charAt((userEmail.value.length) - 2) != ".") {
      this.newUser[0].email = userEmail.value;
      return true;
    } else{
      this.newUser[0].email = "";
      return false;
    }
  }

  isMessageEntered(userMessage:HTMLTextAreaElement){
    if (userMessage.value.length !== 0) {
      this.newUser[0].message = userMessage.value;
      return true;
    } else{
      this.newUser[0].message = "";
      return false;
    }
  }

  checkInputState(inputArea:string){
    let targetInputArea = document.getElementById(inputArea) as HTMLElement;
    targetInputArea.style.opacity = "0.0";
    switch (inputArea) {
      case 'reminder_name':
        this.isNameEntered(document.getElementById('input-name') as HTMLInputElement);
        break;
      case 'reminder_email':
        this.isEmailEntered(document.getElementById('input-email') as HTMLInputElement);
        break;
      case 'reminder_message':
        this.isMessageEntered(document.getElementById('input-text') as HTMLTextAreaElement);
        break;
      default:
        break;
    }
    this.checkFormCompletion();
  }

  clearInput(){
    let inputName = document.getElementById('input-name') as HTMLInputElement;
    let inputEmail = document.getElementById('input-email') as HTMLInputElement;
    let inputMessage = document.getElementById('input-text') as HTMLTextAreaElement;

    inputName.value ="";
    inputEmail.value ="";
    inputMessage. value = "";
  }

  checkbox(state:string){
    let checkbox = document.getElementById('checkbox') as HTMLDivElement;
    checkbox.classList.toggle("checkbox");
    checkbox.classList.remove("error");
    checkbox.classList.toggle(state);

    if (this.newUser[0].checkbox) {
      this.newUser[0].checkbox = false;
    } else{
      this.newUser[0].checkbox = true;
    }

    this.checkFormCompletion()
  }

  // fetch PHP 
  async sendEmailForm(): Promise<void> {
  if (!this.newUser[0].name || !this.newUser[0].email || !this.newUser[0].message || !this.newUser[0].checkbox) {
    this.markIncompletion();
    return;
  } try {
    const response = await fetch('https://bjoernsagmeisterdev.de/portfolio/contact-form-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.newUser[0].name,
        email: this.newUser[0].email,
        message: this.newUser[0].message
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('Mail error:', data);
      console.log("message NOT send");
      //alert('Message could not be sent.');
      return;
    }

    //alert('Message sent successfully!');
    this.popup.controlPopup('open');

  } catch (error) {
    console.error('Request failed:', error);
    alert('Network error. Please try again.');
  }

  this.clearInput();
}
}




