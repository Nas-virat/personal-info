import { Component } from '@angular/core';
import { Project } from '../interface/project';
import { Allprojects } from '../data/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  tag: string = 'all';

  allprojects: Project[] = Allprojects;

  filterProjects() {
    return this.allprojects.filter(project => project.tag.includes(this.tag));
  }
  
  setTag(tag: string) {
    this.tag = tag;
  }
}
