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

  workingExperience: ListItem[] = [];
  conference_papers: ListItem[] = [];
  teachingExperience: ListItem[] = [];
  dataPaths = DataPaths;

  constructor(private dataService: DataService) {

    this.dataService.loadListItems(this.dataPaths.workingExperience, (data: ListItem[]) => {
      this.workingExperience = data;
    });

    this.dataService.loadListItems(this.dataPaths.publications, (data: ListItem[]) => {
      this.conference_papers = data;
    });

    this.dataService.loadListItems(this.dataPaths.teachingExperience, (data: ListItem[]) => {
      this.teachingExperience = data;
    });
  }
}
