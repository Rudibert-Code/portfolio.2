import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguagePopup } from '../language-popup/language-popup';

@Component({
  selector: 'app-imprintcomponent',
  imports: [RouterLink],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class ImprintComponent {
popup = inject(LanguagePopup);
}
