import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  repos:any;
  config:any;

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.gitHubService.LoadRepos().subscribe(res=>{
      this.repos = res;
    });
  }

}
