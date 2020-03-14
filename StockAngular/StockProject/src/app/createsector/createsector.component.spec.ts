import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesectorComponent } from './createsector.component';

describe('CreatesectorComponent', () => {
  let component: CreatesectorComponent;
  let fixture: ComponentFixture<CreatesectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
