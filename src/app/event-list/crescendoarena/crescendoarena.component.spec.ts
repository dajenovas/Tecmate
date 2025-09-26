import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrescendoarenaComponent } from './crescendoarena.component';

describe('CrescendoarenaComponent', () => {
  let component: CrescendoarenaComponent;
  let fixture: ComponentFixture<CrescendoarenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrescendoarenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrescendoarenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
