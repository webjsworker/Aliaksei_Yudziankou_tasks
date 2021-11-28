import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetbackComponent } from './feetback.component';

describe('FeetbackComponent', () => {
  let component: FeetbackComponent;
  let fixture: ComponentFixture<FeetbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeetbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeetbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
