import {Component, HostListener} from '@angular/core';
import {Tabs} from "./models/Tabs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tabs = Tabs;
  tabsStatus: boolean[] = [true, false, false, false];
  switching = false;
  cursor: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.router.url === '/about') this.tabsStatus = [true, false, false, false];
        if (this.router.url === '/resume') this.tabsStatus = [false, true, false, false];
        if (this.router.url === '/education') this.tabsStatus = [false, false, true, false];
        if (this.router.url === '/contacts') this.tabsStatus = [false, false, false, true];
        if (this.router.url === '/loading') this.tabsStatus = [false, false, false, false];
      }
    });

    this.cursor = document.getElementById("cursor");
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(e: any) {
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;

    this.cursor.style.display = "block";
    this.cursor.style.top = e.pageY + "px";
    this.cursor.style.left = e.pageX + "px";
  }

  selectTab(tab: number) {
    if (this.switching) return;

    this.switching = true;
    this.router.navigate(['/loading']);
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
