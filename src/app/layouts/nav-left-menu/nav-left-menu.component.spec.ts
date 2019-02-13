import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftMenuComponent } from './nav-left-menu.component';

describe('NavComponent', () => {
  let component: NavLeftMenuComponent;
  let fixture: ComponentFixture<NavLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
