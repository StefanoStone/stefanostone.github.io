import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";
import {DataService} from "../../services/data.service";
import {DataPaths} from "../../models/dataPaths";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  projects: ListItem[] = [];
  degrees: ListItem[] = [];
  theses: ListItem[] = [];
  workingExperience: ListItem[] = [];
  teachingExperience: ListItem[] = [];
  dataPaths = DataPaths;

  constructor(private dataService: DataService) {
    this.dataService.loadListItems(this.dataPaths.projects, (data: ListItem[]) => {
      this.projects = data;
    });

    this.dataService.loadListItems(this.dataPaths.degrees, (data: ListItem[]) => {
      this.degrees = data;
    });

    this.dataService.loadListItems(this.dataPaths.theses, (data: ListItem[]) => {
      this.theses = data;
    });

    this.dataService.loadListItems(this.dataPaths.workingExperience, (data: ListItem[]) => {
      this.workingExperience = data;
    });

    this.dataService.loadListItems(this.dataPaths.teachingExperience, (data: ListItem[]) => {
      this.teachingExperience = data;
    });
  }
}
