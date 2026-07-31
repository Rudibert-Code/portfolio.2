import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    header = inject(Header);
}
