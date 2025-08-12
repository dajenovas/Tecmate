import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  counter = 0;
  isLoading = true;

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.counter++;
      if (this.counter >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.isLoading = false; // hide loader after count reaches 100
        }, 500);
      }
    }, 25); // speed: lower = faster
  }
}
