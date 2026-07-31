import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "../main/main";
import { Imprint } from "../imprint/imprint";
import { PrivacyPolicy } from "../privacy-policy/privacy-policy";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
