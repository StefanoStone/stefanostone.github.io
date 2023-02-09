import {Component, HostListener} from '@angular/core';
import {Tabs} from "./models/tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tabs = Tabs;
  tabsStatus = [true, false, false, false];
  switching = false;
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

  selectTab(tab: number) {
    if (this.switching) return;

    this.switching = true;
    this.tabsStatus = [false, false, false, false];
    setTimeout(() => {
      this.switching = false;
      this.tabsStatus[tab] = true;
      this.switchContext(tab);
      }, 700);
  }

  switchContext(tab: number) {
    // TODO switch context
  }
}
