import { Component } from '@angular/core';

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
  myRecommendation:Recommendations[]=[
    {
      name:"Felix Winkler",
      project:"Join",
      text:"Björn is my daily dedicated study partner. His approach might be a bit unconventional, but he is exceptionally skilled and an absolute asset to any Team.",
      linkedin:"https://www.linkedin.com/in/felix-winkler-38947a365/"
    },
    {
      name:"Waldemar Chorow",
      project:"Kochwelt",
      text:"Björn ist ein echter Gewinn für jedes Entwicklerteam! Wir haben zusammen die Rezepte-Plattform Kochwelt entwickelt, und Björn hat von Anfang an dafür gesorgt, dass der Teamgeist an erster Stelle steht. Durch seine offene, kommunikative und enthusiastische Art hat er eine tolle Arbeitsatmosphäre geschaffen und das Projekt fachlich wie menschlich extrem bereichert. Er hatte immer das klare Ziel vor Augen, die Aufgaben strukturiert und mit einem sehr guten Ergebnis abzuschließen. Dabei war er ausnahmslos freundlich und stand jedem immer hilfsbereit zur Seite. Die Zusammenarbeit mit ihm hat großen Spaß gemacht. Eine klare Empfehlung, jederzeit wieder gerne.",
      linkedin:"https://www.linkedin.com/in/waldemar-chorow-11460a31b/"
    },
  ]
}
