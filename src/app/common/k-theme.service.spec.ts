import { TestBed } from '@angular/core/testing';

import { KThemeService } from './k-theme.service';

describe('KThemeService', () => {
  let service: KThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
