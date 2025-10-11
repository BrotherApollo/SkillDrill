import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDraw } from './app-draw';

describe('AppDraw', () => {
  let component: AppDraw;
  let fixture: ComponentFixture<AppDraw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDraw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDraw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
