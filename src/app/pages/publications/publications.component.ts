import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";
import {DataService} from "../../services/data.service";
import {DataPaths} from "../../models/dataPaths";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

  conference_papers: ListItem[] = [];
  dataPaths = DataPaths;

  constructor(private dataService: DataService) {
    this.dataService.loadListItems(this.dataPaths.publications, (data: ListItem[]) => {
      this.conference_papers = data;
    });
  }
}
