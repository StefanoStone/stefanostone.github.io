import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  projects: ListItem[] = [];

  workingExperience: ListItem[] = [
    {
      title: 'Front-End Developer',
      subtitle: 'Datasound SRL | March 2022 - January 2023',
      description: 'Maintenance and development of a web portal and mobile application for document sharing.'
    },
    {
      title: 'Research Fellowship',
      subtitle: 'University of Molise | March 2022 - August 2022',
      description: 'Design and development of coordination tools aimed at implementing conservation objectives and ' +
        'measures in Natura 2000 sites included in Reserves and other state-owned areas managed by the Carabinieri.'
    },
    {
      title: 'Front-End Project Manager',
      subtitle: 'Associazione Perfetta Letizia | October 2021 - December 2021',
      description: 'Team manager for the development of "Care for You”, an application used by ' +
        'Associazione Perfetta Letizia to support seniors in the community.'
    }
  ];

  constructor() {
  }
}
