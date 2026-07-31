import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguagePopup } from "../../component/language-popup/language-popup";

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  popup = inject(LanguagePopup);
}
