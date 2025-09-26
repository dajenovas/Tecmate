import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluexpressComponent } from './cluexpress.component';

describe('CluexpressComponent', () => {
  let component: CluexpressComponent;
  let fixture: ComponentFixture<CluexpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CluexpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CluexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
