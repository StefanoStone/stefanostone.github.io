import {Component, HostListener} from '@angular/core';
import {Tabs} from "./models/tabs";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {
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
    switch (tab) {
      case Tabs.about:
        this.router.navigate(['/about'])
        break;
      case Tabs.resume:
        this.router.navigate(['/resume'])
        break;
      case Tabs.education:
        this.router.navigate(['/education'])
        break;
      case Tabs.contacts:
        this.router.navigate(['/contacts'])
        break;
      default:
        this.router.navigate(['/about'])
    }
  }
}
