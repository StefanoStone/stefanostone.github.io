import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stefanostone.github.io';
  top: any;
  left: any;

  cursor: any;
  constructor() {
    this.cursor = document.getElementById("cursor");
  }

  @HostListener('document:click', ['$event'])
  onClick(e: any) {
    console.log(e);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(e: any) {
    this.top = e.pageY + "px";
    this.left = e.pageX + "px";
  }
}
