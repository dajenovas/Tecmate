import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

interface CircleElement extends HTMLElement {
  x: number;
  y: number;
}

@Component({
  selector: 'app-root',
  template: `
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        group([
          query(':enter, :leave', [
            style({ position: 'absolute', width: '100%' })
          ], { optional: true }),
          query(':leave', [
            animate('500ms ease', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }),
            animate('500ms ease', style({ opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  coords = { x: 0, y: 0 };
  circles!: CircleElement[];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  ngAfterViewInit(): void {
    this.circles = Array.from({ length: 10 }).map(() => {
      const circle = document.createElement('div') as unknown as CircleElement;
      circle.classList.add('circle');
      circle.style.backgroundColor = '#ffffff';
      circle.x = 0;
      circle.y = 0;
      document.body.appendChild(circle);
      return circle;
    });

    this.animateCircles();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.coords.x = e.clientX;
    this.coords.y = e.clientY;
  }

  animateCircles() {
    let x = this.coords.x;
    let y = this.coords.y;

    this.circles.forEach((circle: CircleElement, index: number) => {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';
      circle.style.scale = ((this.circles.length - index) / this.circles.length).toString();

      circle.x = x;
      circle.y = y;

      const nextCircle = this.circles[index + 1] || this.circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(() => this.animateCircles());
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
    );
  }

  // --- Added devtools and right-click disable logic below ---

  // @HostListener('document:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   const key = event.key.toUpperCase();

  //   if (
  //     event.key === 'F12' || // F12
  //     (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key)) || // Ctrl+Shift+I/J/C
  //     (event.ctrlKey && key === 'U') // Ctrl+U
  //   ) {
  //     event.preventDefault();
  //   }
  // }

  // @HostListener('document:contextmenu', ['$event'])
  // onContextMenu(event: MouseEvent) {
  //   event.preventDefault();
  // }
}