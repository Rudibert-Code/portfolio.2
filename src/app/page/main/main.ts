import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { NavBar } from '../../component/nav-bar/nav-bar';
import { WhyMe } from '../../component/why-me/why-me';
import { MySkills } from '../../component/my-skills/my-skills';

@Component({
  selector: 'app-main',
  imports: [Header, NavBar, WhyMe, MySkills],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
