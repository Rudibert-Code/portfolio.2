import { Component } from '@angular/core';

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
    checkbox.classList.toggle(state);
  }
}
