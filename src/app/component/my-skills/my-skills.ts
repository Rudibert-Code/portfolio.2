import { Component } from '@angular/core';

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
  ]
}
