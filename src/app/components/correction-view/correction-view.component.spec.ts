import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionViewComponent } from './correction-view.component';

describe('CorrectionViewComponent', () => {
  let component: CorrectionViewComponent;
  let fixture: ComponentFixture<CorrectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrectionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorrectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
