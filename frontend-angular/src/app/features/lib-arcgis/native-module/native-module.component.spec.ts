import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeModuleComponent } from './native-module.component';

describe('NativeModuleComponent', () => {
  let component: NativeModuleComponent;
  let fixture: ComponentFixture<NativeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
