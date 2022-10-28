import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links:Array<LinkModel> = [
    {
      name:'LinkedIn',
      link: 'https://www.linkedin.com/in/david-banda-8a6282196/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      name:'GitHub',
      link: 'https://github.com/bandadavid',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      name:'E-mail',
      link: 'mailto:bandadavid531@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


class LinkModel{
  name!:string;
  link!: string;
  icon!: string;
}