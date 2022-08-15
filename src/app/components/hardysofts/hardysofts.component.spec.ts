import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysoftsComponent } from './hardysofts.component';

describe('HardysoftsComponent', () => {
  let component: HardysoftsComponent;
  let fixture: ComponentFixture<HardysoftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysoftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardysoftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
