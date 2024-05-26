import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillComponent } from './skill/skill.component';
import { WorkExperienceComponent } from './workexperience/workexperience.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { CardComponent } from './component/card/card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SkillComponent,
    WorkExperienceComponent,
    EducationComponent,
    ProjectComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    FontAwesomeModule,
    TimelineModule,
    CardModule,
    AnimateOnScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
