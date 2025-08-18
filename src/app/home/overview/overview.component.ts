import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particlesArray: Particle[] = [];
  private numParticles = 100;

  ngAfterViewInit() {
    // AOS init
    AOS.init({ duration: 500, once: true });

    // Canvas init
    this.setupCanvas();
    this.animate();
  }

  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const container = canvas.parentElement as HTMLElement;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    this.ctx = canvas.getContext('2d')!;

    this.particlesArray = [];
    for (let i = 0; i < this.numParticles; i++) {
      const size = Math.random() * 1 + 1;
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
