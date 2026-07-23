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
      img:'',
      name:''
    },
  ]
}
