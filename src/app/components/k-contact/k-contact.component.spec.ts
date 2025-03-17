import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KContactComponent } from './k-contact.component';

describe('KContactComponent', () => {
  let component: KContactComponent;
  let fixture: ComponentFixture<KContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
