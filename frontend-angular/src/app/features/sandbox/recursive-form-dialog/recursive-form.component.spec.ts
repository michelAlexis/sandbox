import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveFormComponent } from './recursive-form.component';

describe('RecursiveFormComponent', () => {
  let component: RecursiveFormComponent;
  let fixture: ComponentFixture<RecursiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
