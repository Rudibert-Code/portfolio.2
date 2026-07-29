import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { NavBar } from '../../component/nav-bar/nav-bar';
import { WhyMe } from '../../component/why-me/why-me';
import { MySkills } from '../../component/my-skills/my-skills';
import { MyProjects } from '../../component/my-projects/my-projects';
import { Recommendation } from "../../component/recommendation/recommendation";
import { ContactMe } from "../../component/contact-me/contact-me";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-main',
  imports: [Header, NavBar, WhyMe, MySkills, MyProjects, Recommendation, ContactMe, Footer],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
