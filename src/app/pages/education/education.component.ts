import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";
import {DataService} from "../../services/data.service";
import {DataPaths} from "../../models/dataPaths";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  projects: ListItem[] = [];
  degrees: ListItem[] = [];
  theses: ListItem[] = [];
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
  }
}
