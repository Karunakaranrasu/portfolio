import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDialogPopupComponent } from './k-dialog-popup.component';

describe('KDialogPopupComponent', () => {
  let component: KDialogPopupComponent;
  let fixture: ComponentFixture<KDialogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KDialogPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
