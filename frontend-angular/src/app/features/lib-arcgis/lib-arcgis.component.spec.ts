import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibArcgisComponent } from './lib-arcgis.component';

describe('LibArcgisComponent', () => {
  let component: LibArcgisComponent;
  let fixture: ComponentFixture<LibArcgisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibArcgisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibArcgisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
