import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  teachingExperience: ListItem[] = [
    {
      title: 'Teaching Assistant',
      subtitle: 'USI | September 2023 - January 2024',
      description: 'Course: Engineering of Domain Specific Languages'
    },
    {
      title: 'Teaching Assistant',
      subtitle: 'USI | March 2024 - May 2024',
      description: 'Course: Software Atelier 4'
    }
  ];

  papers: ListItem[] = [
    {
      title: 'Paper',
      subtitle: 'Venue',
      description: '??'
    }
  ]

  constructor() {
  }
}
