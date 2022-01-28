import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogModalComponent } from './my-dialog-modal.component';

describe('MyDialogModalComponent', () => {
  let component: MyDialogModalComponent;
  let fixture: ComponentFixture<MyDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
