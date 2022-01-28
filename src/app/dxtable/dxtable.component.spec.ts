import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxtableComponent } from './dxtable.component';

describe('DxtableComponent', () => {
  let component: DxtableComponent;
  let fixture: ComponentFixture<DxtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
