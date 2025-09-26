import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqfusionComponent } from './iqfusion.component';

describe('IqfusionComponent', () => {
  let component: IqfusionComponent;
  let fixture: ComponentFixture<IqfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IqfusionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IqfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
