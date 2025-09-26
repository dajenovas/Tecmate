import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmyfrenzyComponent } from './filmyfrenzy.component';

describe('FilmyfrenzyComponent', () => {
  let component: FilmyfrenzyComponent;
  let fixture: ComponentFixture<FilmyfrenzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmyfrenzyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmyfrenzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
