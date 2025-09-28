import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Tecmate';
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out',
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past them
      offset: window.innerHeight * 0.40
    });
  }
}
