import { Component } from '@angular/core';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  faGithub = faGithub
  faLinkedin = faLinkedin
  faMedium = faMedium
  faEnvelope = faEnvelope
  isHovering = true
}
