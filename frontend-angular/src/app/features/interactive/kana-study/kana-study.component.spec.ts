import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaStudyComponent } from './kana-study.component';

describe('KanaStudyComponent', () => {
  let component: KanaStudyComponent;
  let fixture: ComponentFixture<KanaStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanaStudyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanaStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
