// @ts-ignore
import Typewriter  from 't-writer.js';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle!:ElementRef;
  // links:Array<LinkModel> = [
  //   {
  //     link: 'https://www.youtube.com/channel/UCBXzVk8wvQnBw_EDoalcWLw',
  //     icon: '<i class="uil uil-youtube"></i>'
  //   }
  // ];
  
  constructor() { }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  ngOnInit(): void {
    
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });
    
    writer
      .changeCursorColor('white')
      .type('David Banda')
      .rest(50000)
      .start();
  };

}


class LinkModel{
  link!: string;
  icon!: string;
}