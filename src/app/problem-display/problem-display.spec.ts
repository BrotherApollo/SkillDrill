import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDisplay } from './problem-display';

describe('ProblemDisplay', () => {
  let component: ProblemDisplay;
  let fixture: ComponentFixture<ProblemDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
