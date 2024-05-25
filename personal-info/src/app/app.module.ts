import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillComponent } from './skill/skill.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SkillComponent,
    WorkexperienceComponent,
    EducationComponent,
    ProjectComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
