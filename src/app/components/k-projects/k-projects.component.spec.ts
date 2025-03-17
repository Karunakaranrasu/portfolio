import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KProjectsComponent } from './k-projects.component';

describe('KProjectsComponent', () => {
  let component: KProjectsComponent;
  let fixture: ComponentFixture<KProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
