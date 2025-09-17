import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate = new Date(2025, 10, 8, 9, 0, 0); // 🎯 Your target date/time
  // 2025 → Year
  // 8   → September (0 = Jan, so 8 = Sep)
  // 9   → Day = 9
  // 9   → 9 AM
  // 0   → Minutes
  // 0   → Seconds

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown(): void {
    this.updateTime();

    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000); // update every second
  }

  updateTime(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      clearInterval(this.intervalId);
      this.days = this.hours = this.minutes = this.seconds = 0;
    } else {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;
    private particlesArray: Particle[] = [];
    private numParticles = 100;
  
    private setupCanvas() {
      const canvas = this.canvasRef.nativeElement;
      const container = canvas.parentElement as HTMLElement;
  
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      this.ctx = canvas.getContext('2d')!;
  
      this.particlesArray = [];
      for (let i = 0; i < this.numParticles; i++) {
        const size = Math.random() * 5 + 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        this.particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }
  
    private animate() {
      const canvas = this.canvasRef.nativeElement;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let particle of this.particlesArray) {
        particle.update(canvas);
        particle.draw(this.ctx);
      }
  
      requestAnimationFrame(() => this.animate());
    }
  
    @HostListener('window:resize')
    onResize() {
      this.setupCanvas();
    }
  }
  
  class Particle {
    constructor(
      public x: number,
      public y: number,
      public size: number,
      public speedX: number,
      public speedY: number
    ) { }
  
    update(canvas: HTMLCanvasElement) {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
}
