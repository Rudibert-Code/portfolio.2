import { Component } from '@angular/core';
import { ImprintComponent } from "../../component/imprint/imprint";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-imprint',
  imports: [Footer, ImprintComponent],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {}
