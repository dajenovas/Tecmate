import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThegridvortexComponent } from './thegridvortex.component';

describe('ThegridvortexComponent', () => {
  let component: ThegridvortexComponent;
  let fixture: ComponentFixture<ThegridvortexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThegridvortexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThegridvortexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
