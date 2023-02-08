import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stefanostone.github.io';
  cursor: any;

  constructor() {
  }

  ngOnInit() {
    this.cursor = document.getElementById("cursor");
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(e: any) {
    this.cursor.style.top = e.pageY + "px";
    this.cursor.style.left = e.pageX + "px";
  }
}
