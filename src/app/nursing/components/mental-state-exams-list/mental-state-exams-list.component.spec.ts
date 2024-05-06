import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamsListComponent } from './mental-state-exams-list.component';

describe('MentalStateExamsListComponent', () => {
  let component: MentalStateExamsListComponent;
  let fixture: ComponentFixture<MentalStateExamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentalStateExamsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalStateExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
