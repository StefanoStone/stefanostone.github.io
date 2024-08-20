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

  degrees: ListItem[] = [
    {
      title: 'PhD in Computer Science/Software Engineering',
      subtitle: 'Università della Svizzera italiana | 2023 - ongoing',
      description: 'REVEAL (Reverse Engineering, Visualization, Evolution Analysis Lab) group'
    },
    {
      title: 'Master in Software and Data Engineering',
      subtitle: 'Università della Svizzera italiana | 2022 - 2023',
      description: 'Joint degree with University of Molise'
    },
    {
      title: 'Master in Software Systems Security',
      subtitle: 'University of Molise | 2021 - 2023',
      description: 'Joint degree with Università della Svizzera italiana'
    },
    {
      title: 'Bachelor in Computer Science',
      subtitle: 'University of Molise | 2018 - 2021',
      description: 'Graduated defending a thesis on Machine Learning'
    }
  ];

  theses: ListItem[] = [
    {
      title: 'A methodology and an App for measuring blood pressure',
      subtitle: 'University of Molise | 2021',
      description: 'Thesis in the course of Hands on Machine Learning for the prediction of blood pressure values with ' +
        'the use of a mobile application and the support of a smartwatch with a PPG sensor built-in'
    },
    {
      title: 'RePlay: Replicating Gameplay through Video Analysis and On-Screen Controls',
      subtitle: 'University of Molise & Università della Svizzera italiana | 2023',
      description: 'Thesis in the course of Software Analytics for the replication of gameplay through the analysis of ' +
        'video recordings by exploiting on-screen controls in the gameplay; Proof of Concept with the game Trackmania.'
    }
  ]

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

  constructor() {
  }
}
