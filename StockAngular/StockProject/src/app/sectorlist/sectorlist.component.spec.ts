import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorlistComponent } from './sectorlist.component';

describe('SectorlistComponent', () => {
  let component: SectorlistComponent;
  let fixture: ComponentFixture<SectorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
