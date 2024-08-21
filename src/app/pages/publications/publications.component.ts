import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

  conference_papers: ListItem[] = [
    {
      title: 'Towards the Automatic Replication of Gameplays to Support Game Debugging',
      subtitle: 'Foundations of Applied Software Engineering for Games workshop 2024 | FaSE4Games',
      description: 'Short paper',
      doi: 'https://doi.org/10.1145/3663532.3664465',
      pdf_path: 'assets/papers/fase4games2024.pdf',
      type: 'Open Access'
    }
  ]

  constructor() {
  }
}
