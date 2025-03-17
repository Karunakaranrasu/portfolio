import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KFooterComponent } from './k-footer.component';

describe('KFooterComponent', () => {
  let component: KFooterComponent;
  let fixture: ComponentFixture<KFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
