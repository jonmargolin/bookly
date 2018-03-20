import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgtionComponent } from './navgtion.component';

describe('NavgtionComponent', () => {
  let component: NavgtionComponent;
  let fixture: ComponentFixture<NavgtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
