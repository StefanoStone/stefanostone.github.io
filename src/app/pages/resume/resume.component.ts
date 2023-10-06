import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  projects: ListItem[] = [
    {
      title: 'Front-End Developer',
      subtitle: 'Università della Svizzera italiana | October 2022 - January 2023',
      description: 'Development of a web portal to track travels of USI employees'
    },
    {
      title: 'Machine Learning Engineer',
      subtitle: 'Università della Svizzera italiana | October 2022 - January 2023',
      description: 'Development of a machine learning model for the prediction of issue assignee in github and ' +
        'prediction of method name in Java'
    },
    {
      title: 'Front-End Project Manager',
      subtitle: 'University of Molise | March 2022 - July 2022',
      description: 'Team manager for the development of "App Unimol”, an application used by university students'
    },
    {
      title: 'Android app design and development',
      subtitle: 'University of Molise | October 2020 – January 2021',
      description: 'Development and design of a prototype in Android of an app in the area of video content ' +
        'streaming'
    },
    {
      title: 'Hybrid architecture app design and development',
      subtitle: 'University of Molise | March 2020 – July 2020',
      description: 'Front-end team member for development of UniMove, hybrid app based on Ionic-Angular framework'
    },
    {
      title: 'Java videogame development',
      subtitle: 'University of Molise | March 2019 - July 2019',
      description: 'Development of a videogame in Java for learning purposes'
    },
    {
      title: 'Management program in C language',
      subtitle: 'University of Molise | October 2018 – January 2019',
      description: 'Development of a program in C language for the management of a Apple device repair company'
    }
  ];

  workingExperience: ListItem[] = [
    {
      title: 'Front-End Developer',
      subtitle: 'Datasound SRL | March 2022 - January 2023',
      description: 'Maintenance and development of a web portal and mobile application for document sharing'
    },
    {
      title: 'Research Fellowship',
      subtitle: 'University of Molise | March 2022 - August 2022',
      description: 'Design and development of coordination tools aimed at implementing conservation objectives and ' +
        'measures in Natura 2000 sites included in Reserves and other state-owned areas managed by the Carabinieri'
    },
    {
      title: 'Front-End Project Manager',
      subtitle: 'Associazione Perfetta Letizia | October 2021 - December 2021',
      description: 'Team manager for the development of "Care for You”, an application used by ' +
        'Associazione Perfetta Letizia to support seniors in the community'
    }
  ];

  teachingExperience: ListItem[] = [
    {
      title: 'Teaching Assistant',
      subtitle: 'USI | September 2023 - January 2024',
      description: 'Course: Engineering of Domain Specific Languages'
    }
  ];

  constructor() {
  }
}
