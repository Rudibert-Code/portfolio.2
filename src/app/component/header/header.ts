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

  sendEmail(){
    
  }
}
