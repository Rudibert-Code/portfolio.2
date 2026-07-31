import { Component, Injectable } from '@angular/core';

const overlay = document.getElementById('overlay') as HTMLDialogElement;

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

  openDialog(){
    overlay?.show();
  }

  closeDialog(){
    overlay?.close();
  }
}
