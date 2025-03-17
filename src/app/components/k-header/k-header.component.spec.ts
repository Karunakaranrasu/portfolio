import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KHeaderComponent } from './k-header.component';

describe('KHeaderComponent', () => {
  let component: KHeaderComponent;
  let fixture: ComponentFixture<KHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
