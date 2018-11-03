import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmDetailComponent } from './firm-detail.component';

describe('FirmDetailComponent', () => {
  let component: FirmDetailComponent;
  let fixture: ComponentFixture<FirmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
