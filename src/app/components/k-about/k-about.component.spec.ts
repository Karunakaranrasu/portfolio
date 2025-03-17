import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KAboutComponent } from './k-about.component';

describe('KAboutComponent', () => {
  let component: KAboutComponent;
  let fixture: ComponentFixture<KAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
