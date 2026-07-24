import { Component } from '@angular/core';

interface Project{
  number:number,
  name:string,
  tech:string,
  duration:string,
  img:string,
  about:string,
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
      tech:'Javascript, HTML, CSS, Github',
      duration:'3 Weeks',
      img:'',
      about:'',
      link:'',
      git:''
    },
  ]

  // List of projects + details
  myProjects:Project[]=[
    {
      number:1,
      name:'Jump N Run',
      tech:'Javascript, HTML, CSS, Github',
      duration:'3 Weeks',
      img:'',
      about:'',
      link:'',
      git:''
    },
    {
      number:2,
      name:'Pokédex',
      tech:'Javascript, HTML, CSS, Github',
      duration:'3 Weeks',
      img:'',
      about:'',
      link:'',
      git:''
    },
    {
      number:3,
      name:'Join',
      tech:'Angular, Typescript, HTML, SCSS, Github, Supabase',
      duration:'5 Weeks',
      img:'',
      about:'',
      link:'',
      git:''
    },
  ]

  getProjectDetails(project:Project){
    this.currentProject=[];
    this.currentProject.push(project);
    this.markProjectLable(project.number);
  }

  firstMark(){
    setTimeout(() => {
      if (isLoaded == false) {
        isLoaded = true;
        this.markProjectLable(1); 
      } else{
        return
      }
    },0)
  }

  markProjectLable(number:number){
    this.clearProjectLable();
    let targetLable = document.getElementById("pro"+number) as HTMLParagraphElement;
    targetLable.style.backgroundColor = "#2D3840";
    targetLable.style.color = "#F8F5EC";
    this.adjustProjectBG(number);
  }

  clearProjectLable(){
    for (let index = 0; index < this.myProjects.length; index++) {
      let targetLable = document.getElementById("pro"+this.myProjects[index].number) as HTMLParagraphElement;
      targetLable.style.backgroundColor = "#262E34";
      targetLable.style.color = "#89BCD9";
    }
  }

  adjustProjectBG(number:number){
    let bg = document.getElementById('project-pg') as HTMLDialogElement;
    if (number != 1) {
      if(number == this.myProjects.length && window.innerWidth <= 400){
        bg.classList.add('shape_bg-alt-back');
      } else{
        bg.classList.add('shape_bg-alt-neutral');
      } 
    } else{
      bg.classList.remove('shape_bg-alt-neutral'); 
      bg.classList.remove('shape_bg-alt-back');
    }
  }
}
