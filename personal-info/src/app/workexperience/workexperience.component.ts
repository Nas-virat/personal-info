import { Component } from '@angular/core';
import { WorkExperience } from '../interface/workexperience';
import { AllWorkElement } from '../data/workexperience';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css'],
})
export class Workexperience {
  workelements: WorkExperience[];
  constructor() {
    this.workelements = AllWorkElement;
  }
}
