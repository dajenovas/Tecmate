import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingTeamComponent } from './organizing-team.component';

describe('OrganizingTeamComponent', () => {
  let component: OrganizingTeamComponent;
  let fixture: ComponentFixture<OrganizingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizingTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
