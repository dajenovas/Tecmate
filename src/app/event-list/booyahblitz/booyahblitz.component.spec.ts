import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooyahblitzComponent } from './booyahblitz.component';

describe('BooyahblitzComponent', () => {
  let component: BooyahblitzComponent;
  let fixture: ComponentFixture<BooyahblitzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooyahblitzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooyahblitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
