import { Component, HostListener } from '@angular/core';
import Language from "../../shared/language/languages.json";

interface Skills{
  img:string,
  name:string,
}

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
  mySkills:Skills[]=[
    {
      img:'assets/icons/skill_javascript.png',
      name:'Javascript'
    },
    {
      img:'assets/icons/skill_html.png',
      name:'HTML'
    },
    {
      img:'assets/icons/skill_css.png',
      name:'CSS'
    },
    {
      img:'assets/icons/skill_typescript.png',
      name:'TypeScript'
    },
    {
      img:'assets/icons/skill_git.png',
      name:'Git'
    },
    {
      img:'assets/icons/skill_angular.png',
      name:'Angular'
    },
    {
      img:'assets/icons/skill_scrum.png',
      name:'Scrum'
    },
    {
      img:'assets/icons/skill_supabase.png',
      name:'Supabase'
    },
    {
      img:'assets/icons/skill_photoshop.png',
      name:'Photoshop'
    },
    {
      img:'assets/icons/skill_spine.png',
      name:'Spine2D'
    },
    {
      img:'assets/icons/skill_blender.png',
      name:'Blender'
    },
  ]
  currentlyLearning:Skills[]=[
    {
      img:'assets/icons/skill_typescript.png',
      name:'TypeScript'
    },
    {
      img:'assets/icons/skill_angular.png',
      name:'Angular'
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
