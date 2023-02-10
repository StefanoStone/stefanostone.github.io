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
      subtitle: 'Università della Svizzera Italiana | 2022 - ongoing',
      description: 'Joint degree with University of Molise'
    },
    {
      title: 'Master in Software Systems Security',
      subtitle: 'University of Molise | 2021 - ongoing',
      description: 'Joint degree with Università della Svizzera Italiana'
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
        'the use of a mobile application and the support of a smartwatch with a PPG sensor built-in.'
    }
  ]

  constructor() {
  }
}
