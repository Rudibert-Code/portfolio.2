import { Component, inject, HostListener } from '@angular/core';
import { Header } from "../header/header";
import Language from "../../shared/language/languages.json";

interface Recommendations{
  name:string,
  project:string,
  text:string,
  linkedin:string
}

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.html',
  styleUrl: './recommendation.scss',
})
export class Recommendation {
  header = inject(Header);

  myRecommendation:Recommendations[]=[
    {
      name:"Felix Winkler",
      project:" Join",
      text:'"Björn is my daily dedicated study partner. His approach might be a bit unconventional, but he is exceptionally skilled and an absolute asset to any Team."',
      linkedin:"https://www.linkedin.com/in/felix-winkler-38947a365/"
    },
    {
      name:"Waldemar Chorow",
      project:" Kochwelt",
      text:'"Björn ist ein echter Gewinn für jedes Entwicklerteam! Wir haben zusammen die Rezepte-Plattform Kochwelt entwickelt, und Björn hat von Anfang an dafür gesorgt, dass der Teamgeist an erster Stelle steht. Durch seine offene, kommunikative und enthusiastische Art hat er eine tolle Arbeitsatmosphäre geschaffen und das Projekt fachlich wie menschlich extrem bereichert. Er hatte immer das klare Ziel vor Augen, die Aufgaben strukturiert und mit einem sehr guten Ergebnis abzuschließen. Dabei war er ausnahmslos freundlich und stand jedem immer hilfsbereit zur Seite. Die Zusammenarbeit mit ihm hat großen Spaß gemacht. Eine klare Empfehlung, jederzeit wieder gerne."',
      linkedin:"https://www.linkedin.com/in/waldemar-chorow-11460a31b/?skipRedirect=true"
    },
    {
      name:"Jana Schaaf",
      project:" Join",
      text:'"Working with Björn was a great experience. He is the kind of teammate who approaches every challenge with curiosity and determination. Whenever a problem came up, he was always ready to look for a solution instead of waiting for someone else to solve it. Beyond his technical skills, Björn shared his knowledge, supported the team, and kept the mood positive with his sense of humor. I would happily work with him again and recommend him to any team."',
      linkedin:"..."
    },
  ]

  languageCache = Language.DE;

  @HostListener('document:click', ['$event'])
    closeMenu(event: MouseEvent){
      this.ngOnInit();
    }

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.changeLanguage(selectedLanguageID);
  }

  changeLanguage(languageID:string){
    switch (languageID) {
      case 'DE':
        this.languageCache = Language.DE;
        break;

      case 'EN':
        this.languageCache = Language.EN;
        break;
      
      default:
        this.languageCache = Language.EN;
        break;
    }
  }
}
