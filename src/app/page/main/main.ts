import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { NavBar } from '../../component/nav-bar/nav-bar';
import { WhyMe } from '../../component/why-me/why-me';

@Component({
  selector: 'app-main',
  imports: [Header, NavBar, WhyMe],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
