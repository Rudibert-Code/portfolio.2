import { Component } from '@angular/core';
import { ImprintComponent } from "../../component/imprint/imprint";
import { Footer } from "../../component/footer/footer";
import { LanguagePopup } from "../../component/language-popup/language-popup";

@Component({
  selector: 'app-imprint',
  imports: [Footer, ImprintComponent, LanguagePopup],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {}
