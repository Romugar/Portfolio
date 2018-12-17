import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ 'min-height': '100%', 'min-width': '1024px', 'width': '100%',
        'height': 'auto', 'position': 'fixed', 'top': '0', 'left': '0' })
          , { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({  transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
          ], { optional: true }),
        ])
      ])
    ])
  ]})

export class AppComponent implements OnInit {

  ngOnInit() {
  }

}
