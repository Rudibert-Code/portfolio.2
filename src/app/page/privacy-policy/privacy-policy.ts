import { Component } from '@angular/core';
import { LegalNotice } from "../../component/legal-notice/legal-notice";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-privacy-policy',
  imports: [LegalNotice, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}
