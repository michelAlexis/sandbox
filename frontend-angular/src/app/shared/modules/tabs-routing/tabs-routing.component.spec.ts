import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRoutingComponent } from './tabs-routing.component';

describe('TabsRoutingComponent', () => {
  let component: TabsRoutingComponent;
  let fixture: ComponentFixture<TabsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsRoutingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
