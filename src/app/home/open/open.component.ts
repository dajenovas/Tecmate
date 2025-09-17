import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrl: './open.component.scss'
})
export class OpenComponent implements OnInit {
  ngOnInit(): void {
    this.initScramble();
  }

  initScramble(): void {
    const el = document.getElementById('scramble-text');
    const phrases = [
      "A National Level Technical Symposium",
      "From Department of Computer Science & Engineering",
      "Great Oppurtunity to show off your Technical Skills",
      "Tech Meets Sustainability"
    ];

    let counter = 0;
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frameRequest: number;

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const scramble = (newText: string, callback: () => void) => {
      const oldText = el?.innerText || "";
      const length = Math.max(oldText.length, newText.length);
      type QueueItem = {
        from: string;
        to: string;
        start: number;
        end: number;
        char: string;
      };

      const queue: QueueItem[] = [];


      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end, char: '' });
      }

      let frame = 0;

      const update = () => {
        let output = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          let { from, to, start, end, char } = queue[i];

          if (frame >= end) {
            output += to;
            complete++;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = randomChar();
              queue[i].char = char;
            }
            output += `<span style="opacity:0.4">${char}</span>`;
          } else {
            output += from;
          }
        }

        if (el) el.innerHTML = output;

        if (complete === queue.length) {
          cancelAnimationFrame(frameRequest);
          callback();
        } else {
          frame++;
          frameRequest = requestAnimationFrame(update);
        }
      };

      update();
    };

    const next = () => {
      scramble(phrases[counter], () => {
        setTimeout(next, 3000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }
}
