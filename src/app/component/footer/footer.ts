import { Component, inject } from '@angular/core';
import { Header } from "../header/header";

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    header = inject(Header);
}
