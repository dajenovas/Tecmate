import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmongcodersComponent } from './amongcoders.component';

describe('AmongcodersComponent', () => {
  let component: AmongcodersComponent;
  let fixture: ComponentFixture<AmongcodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmongcodersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmongcodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
