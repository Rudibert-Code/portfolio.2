import { Component, inject, HostListener } from '@angular/core';
import { Header } from "../header/header";
import Language from "../../shared/language/languages.json";

interface Recommendations{
  name:string,
  ID:number,
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

  languageCache = Language.DE;

  myRecommendation:Recommendations[]=[
    {
      name:"Felix Winkler",
      ID:0,
      project:" Join",
      text:'FWinkler',
      linkedin:"https://www.linkedin.com/in/felix-winkler-38947a365/"
    },
    {
      name:"Waldemar Chorow",
      ID:1,
      project:" Kochwelt",
      text:'WChorow',
      linkedin:"https://www.linkedin.com/in/waldemar-chorow-11460a31b/?skipRedirect=true"
    },
    {
      name:"Jana Schaaf",
      ID:2,
      project:" Join",
      text:'JSchaaf',
      linkedin:""
    },
  ]

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

  hideLinkIfNoneExist(){
    setTimeout(()=>{
      for (let index = 0; index < this.myRecommendation.length; index++) {
        if (this.myRecommendation[index].linkedin == "") {
          let quickLink = document.getElementById(String(this.myRecommendation[index].ID)) as HTMLElement;
          quickLink.classList.add("hidden");
        } 
      }
      this.getRecomText();
    },0)
  }

  getRecomText(){
    for (let index = 0; index < this.myRecommendation.length; index++) {
      let teargetRecom = document.getElementById(String(this.myRecommendation[index].text)) as HTMLSpanElement;
      teargetRecom.innerHTML = this.languageCache.recommendations[Number(index + 2)];
    }
  }
}
