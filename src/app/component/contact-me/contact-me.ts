import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
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

  sendEmail(){
    if (this.newUser[0].name && this.newUser[0].email && this.newUser[0].message && this.newUser[0].checkbox) {
      let form = document.getElementById('form') as HTMLFormElement;
      form.submit();
    } else{
      this.markIncompletion();
    }
  }

  markIncompletion(){
    //let userName = document.getElementById('input-name') as HTMLInputElement;
    //let userEmail = document.getElementById('input-email') as HTMLInputElement;
    //let userMessage = document.getElementById('input-text') as HTMLTextAreaElement;
    let checkboxState = document.getElementById('checkbox') as HTMLDivElement;

    let userName = document.getElementById('reminder_name') as HTMLParagraphElement;

    if (this.newUser[0].name == "") {
      //userName.classList.add("input_error");
      //userName.value= String(this.languageCache.contact[10]);  
    }
    if (this.newUser[0].email == "") {
      //userEmail.classList.add("input_error");
      //userEmail.value= String(this.languageCache.contact[11]);  
    }
    if (this.newUser[0].message == "") {
      //userMessage.classList.add("input_error");
      //userMessage.value= String(this.languageCache.contact[12]);  
    }
    if (this.newUser[0].checkbox == false) {
      checkboxState.classList.add("error");  
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
    if (userName.value.length >= 3 && !userName.value.includes("     Your name") && !userName.value.includes("     Your name is required")) {
      this.newUser[0].name = userName.value;
    } else{
      this.newUser[0].name = "";
    }
  }

  isEmailEntered(userEmail:HTMLInputElement){
    if (userEmail.value.length >= 5 && userEmail.value.includes("@") && userEmail.value.includes(".")) {
      this.newUser[0].email = userEmail.value;
    } else{
      this.newUser[0].email = "";
    }
  }

  isMessageEntered(userMessage:HTMLTextAreaElement){
    if (userMessage.value.length !== 0) {
      this.newUser[0].message = userMessage.value;
    } else{
      this.newUser[0].message = "";
    }
  }

  checkInputState(inputArea:string){
    let targetInputArea = document.getElementById(inputArea) as HTMLElement;
    targetInputArea.classList.remove("input_error");

    switch (inputArea) {
      case 'input-name':
        this.isNameEntered(document.getElementById(inputArea) as HTMLInputElement);
        break;
      case 'input-email':
        this.isEmailEntered(document.getElementById(inputArea) as HTMLInputElement);
        break;
      case 'input-text':
        this.isMessageEntered(document.getElementById(inputArea) as HTMLTextAreaElement);
        break;
      default:
        break;
    }

    this.checkFormCompletion();
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
}
