import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in')
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CardComponent {
  @Input()
  name!: string;
  @Input()
  description!: string;
  @Input()
  image!: string;
  @Input()
  link!: string;
  @Input()
  skill!: string;
}