import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  age: number = 0;

  constructor() {
    this.age = this.calculateAge();
  }

/*  calculateAge(): number {
    let today = new Date();
    let birthDate = new Date(2000, 2, 19);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }*/

   calculateAge(): number {
    const ageDifMs = Date.now() - new Date(2000, 2, 19).getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
