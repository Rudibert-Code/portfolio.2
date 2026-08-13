import { Component, HostListener } from '@angular/core';
import Language from "../../shared/language/languages.json";

interface Project{
  number:number,
  name:string,
  tech:string,
  techIMG:string[],
  img:string,
  link:string,
  git:string
}

interface ProjectDesc{
  about:string,
  duration:string,
  organization?:string,
  experience?:string,
}

let isLoaded:boolean = false;

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {
  languageCache = Language.DE;

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
      img:'assets/img/p1.jpg',
      link:'https://bjoernsagmeister.developerakademie.net/jump-n-run',
      git:'https://github.com/Rudibert-Code/jump-n-run.git'
    },
  ]

  currentProjectDesc: ProjectDesc[]=[
    {
      about:this.languageCache.p1[0],
      duration:this.languageCache.p1[1],
      organization:this.languageCache.p1[2],
      experience:this.languageCache.p1[3]
    }
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
      img:'assets/img/p1.jpg',
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
      img:'assets/img/p2.jpg',
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
      img:'assets/img/p3.jpg',
      link:'https://bjoernsagmeister.developerakademie.net/angular-projects/join/login',
      git:'https://github.com/Rudibert-Code/join'
    },
  ]

  @HostListener('document:click', ['$event'])
    closeMenu(event: MouseEvent){
      console.log("listener works")
      this.ngOnInit();
    }

  ngOnInit(){
    let selectedLanguageID = String(localStorage.getItem("language"));
    this.changeLanguage(selectedLanguageID);
    this.updateProjectLanguage(this.currentProject[0].number);
 
    setTimeout(()=>{
      this.getProjectDetails(this.currentProject[0])
    },0)
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

  getProjectDetails(project:Project){
    this.currentProject=[];
    this.currentProject.push(project);
    this.markProjectLable(project.number);
    this.setProjectTechList();
    this.updateProjectLanguage(project.number);
    this.hideEmpty();
  }

  updateProjectLanguage(projectNumber:number){
    if (projectNumber == 1) {
      this.currentProjectDesc[0].about = this.languageCache.p1[0];
      this.currentProjectDesc[0].duration = this.languageCache.p1[1];
      this.currentProjectDesc[0].experience = this.languageCache.p1[2];
      this.currentProjectDesc[0].organization = this.languageCache.p1[3];
    } else if(projectNumber == 2){
      this.currentProjectDesc[0].about = this.languageCache.p2[0];
      this.currentProjectDesc[0].duration = this.languageCache.p2[1];
      this.currentProjectDesc[0].experience = this.languageCache.p2[2];
      this.currentProjectDesc[0].organization = this.languageCache.p2[3];
    } else if(projectNumber == 3){
      this.currentProjectDesc[0].about = this.languageCache.p3[0];
      this.currentProjectDesc[0].duration = this.languageCache.p3[1];
      this.currentProjectDesc[0].experience = this.languageCache.p3[2];
      this.currentProjectDesc[0].organization = this.languageCache.p3[3];
    }
  }

  hideEmpty(){
    let containerOrg = document.getElementById('container_how') as HTMLDivElement;
    let containerExp = document.getElementById('container_exp') as HTMLDivElement;

    if (this.currentProjectDesc[0].organization == "") {
      containerOrg.style.display = "none";
    } else{
      containerOrg.style.display = "flex";
    }
    
    if (this.currentProjectDesc[0].experience == "") {
      containerExp.style.display = "none";
    } else{
      containerExp.style.display = "flex";
    }
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
    projectTechListMobile.innerHTML = '';

    for (let index = 0; index < this.currentProject[0].techIMG.length; index++) {
      projectTechListMobile.innerHTML += `<img src="${this.currentProject[0].techIMG[index]}" alt="">`
    }
  }

  markProjectLable(number:number){
    this.clearProjectLable();
    let targetLableMobile = document.getElementById("pro"+number+"_mobile") as HTMLParagraphElement;
    let targetLableDesktop = document.getElementById("pro"+number+"_desktop") as HTMLParagraphElement;
    targetLableMobile.style.backgroundColor = "#2D3840";
    targetLableDesktop.style.backgroundColor = "#2D3840";
    targetLableMobile.style.color = "#F8F5EC";
    targetLableDesktop.style.color = "#F8F5EC";
    
    if (window.innerWidth <= 1440) {
      this.adjustProjectBG(number);
    }
  }

  clearProjectLable(){
    for (let index = 0; index < this.myProjects.length; index++) {
      let targetLableMobile = document.getElementById("pro"+this.myProjects[index].number+"_mobile") as HTMLParagraphElement;
      let targetLableDesktop = document.getElementById("pro"+this.myProjects[index].number+"_desktop") as HTMLParagraphElement;
      targetLableMobile.style.backgroundColor = "#262E34";
      targetLableDesktop.style.backgroundColor = "#262E34";
      targetLableMobile.style.color = "#89BCD9";
      targetLableDesktop.style.color = "#89BCD9";
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
