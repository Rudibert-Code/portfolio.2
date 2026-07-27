import { Component } from '@angular/core';

interface Project{
  number:number,
  name:string,
  tech:string,
  techIMG:string[],
  duration:string,
  img:string,
  about?:string,
  how?:string,
  exp?:string,
  link:string,
  git:string
}

let isLoaded:boolean = false;

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {
  // Starting project + details
  currentProject:Project[]=[
    {
      number:1,
      name:'Jump N Run',
      tech:' Javascript, HTML, CSS, Github',
      techIMG:[
        'assets/icons/skill_javascript.png',
        'assets/icons/skill_html.png',
        'assets/icons/skill_css.png',
        'assets/icons/skill_git.png'
      ],
      duration:' 3 Weeks',
      img:'assets/img/img_space-blast.png',
      about:'About...',
      link:'https://bjoernsagmeister.developerakademie.net/jump-n-run',
      git:'https://github.com/Rudibert-Code/jump-n-run.git'
    },
  ]

  // List of projects + details
  myProjects:Project[]=[
    {
      number:1,
      name:'Jump N Run',
      tech:' Javascript, HTML, CSS, Github',
      techIMG:[
        'assets/icons/skill_javascript.png',
        'assets/icons/skill_html.png',
        'assets/icons/skill_css.png',
        'assets/icons/skill_git.png'
      ],
      duration:' 3 Weeks',
      img:'assets/img/img_space-blast.png',
      about:'About...',
      link:'https://bjoernsagmeister.developerakademie.net/jump-n-run',
      git:'https://github.com/Rudibert-Code/jump-n-run.git'
    },
    {
      number:2,
      name:'Pokédex',
      tech:' Javascript, HTML, CSS, Github',
      techIMG:[
        'assets/icons/skill_javascript.png',
        'assets/icons/skill_html.png',
        'assets/icons/skill_css.png',
        'assets/icons/skill_git.png'
      ],
      duration:' 3 Weeks',
      img:'assets/img/img_pokedex.jpg',
      about:'About...',
      link:'https://bjoernsagmeister.developerakademie.net/modul8_pokedex/',
      git:'https://github.com/Rudibert-Code/modul8_pokedex'
    },
    {
      number:3,
      name:'Join',
      tech:' Angular, Typescript, HTML, CSS, Github, Supabase',
      techIMG:[
        'assets/icons/skill_angular.png',
        'assets/icons/skill_typescript.png',
        'assets/icons/skill_html.png',
        'assets/icons/skill_css.png',
        'assets/icons/skill_git.png',
        'assets/icons/skill_supabase.png'
      ],
      duration:' 5 Weeks',
      img:'assets/img/img_join.png',
      about:'About...',
      link:'',
      git:''
    },
  ]

  getProjectDetails(project:Project){
    this.currentProject=[];
    this.currentProject.push(project);
    this.markProjectLable(project.number);
  }

  initFunction(){
    setTimeout(() => {
      if (isLoaded == false) {
        isLoaded = true;
        this.markProjectLable(1); 
      } else{
        return
      }
      this.setProjectTechList();
    },0)
  }

  setProjectTechList(){
    let projectTechListMobile = document.getElementById('project-techlist-desktop') as HTMLDivElement;

    for (let index = 0; index < this.currentProject[0].techIMG.length; index++) {
      projectTechListMobile.innerHTML += `<img src="${this.currentProject[0].techIMG[index]}" alt="">`
    }
  }

  markProjectLable(number:number){
    this.clearProjectLable();
    let targetLable = document.getElementById("pro"+number) as HTMLParagraphElement;
    targetLable.style.backgroundColor = "#2D3840";
    targetLable.style.color = "#F8F5EC";
    
    if (window.innerWidth <= 1440) {
      this.adjustProjectBG(number);
    }
  }

  clearProjectLable(){
    for (let index = 0; index < this.myProjects.length; index++) {
      let targetLable = document.getElementById("pro"+this.myProjects[index].number) as HTMLParagraphElement;
      targetLable.style.backgroundColor = "#262E34";
      targetLable.style.color = "#89BCD9";
    }
  }

  calculateCombinedLableWidth(){
    let combinedWidth:number = 0;
    for (let index = 0; index < this.myProjects.length; index++) {
      let currentLable = document.getElementById("pro"+this.myProjects[index].number) as HTMLParagraphElement;
      combinedWidth += Number(currentLable.offsetWidth + 48);
    }
    if (combinedWidth >= window.innerWidth-24 ) {
      return true;
    } else {
      return false;
    }
  }

  adjustProjectBG(number:number){
    let bg = document.getElementById('project-bg') as HTMLDialogElement;
    if (number != 1) {
      if(number == this.myProjects.length && window.innerWidth <= 400 && this.calculateCombinedLableWidth()){
        bg.classList.add('shape_bg-alt-back');
      } else{
        bg.classList.remove('shape_bg-alt-back');
        bg.classList.add('shape_bg-alt-neutral');
      } 
    } else{
      bg.classList.remove('shape_bg-alt-neutral'); 
      bg.classList.remove('shape_bg-alt-back');
    }
  }

  openWindow(link:string){
    window.open(link);
  }
}
