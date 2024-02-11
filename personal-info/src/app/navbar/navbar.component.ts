import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  over: boolean = false;
  open: boolean = false;

  handleScroll(event: MouseEvent, targetId: string): void {
    event.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMenu(): void {
    this.open = !this.open;
  }
}
