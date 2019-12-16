import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPage404Component } from './sub-page404.component';

describe('SubPage404Component', () => {
  let component: SubPage404Component;
  let fixture: ComponentFixture<SubPage404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPage404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPage404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
