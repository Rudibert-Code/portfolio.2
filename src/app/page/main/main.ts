import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { NavBar } from '../../component/nav-bar/nav-bar';

@Component({
  selector: 'app-main',
  imports: [Header, NavBar],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
