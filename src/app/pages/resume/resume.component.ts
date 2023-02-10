import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  projects: ListItem[] = [];
  workingExperience: ListItem[] = [];

  constructor() {
  }
}
