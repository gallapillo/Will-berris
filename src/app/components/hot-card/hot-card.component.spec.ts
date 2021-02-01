import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCardComponent } from './hot-card.component';

describe('HotCardComponent', () => {
  let component: HotCardComponent;
  let fixture: ComponentFixture<HotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
