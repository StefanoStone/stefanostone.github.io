import { Component } from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  degrees: ListItem[] = [
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

  constructor() {
  }
}
