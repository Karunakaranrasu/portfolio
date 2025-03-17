import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KSkillsComponent } from './k-skills.component';

describe('KSkillsComponent', () => {
  let component: KSkillsComponent;
  let fixture: ComponentFixture<KSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
