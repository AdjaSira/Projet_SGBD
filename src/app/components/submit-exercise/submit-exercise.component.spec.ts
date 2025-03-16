import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitExerciseComponent } from './submit-exercise.component';

describe('SubmitExerciseComponent', () => {
  let component: SubmitExerciseComponent;
  let fixture: ComponentFixture<SubmitExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
