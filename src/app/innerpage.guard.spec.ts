import { TestBed } from '@angular/core/testing';

import { InnerpageGuard } from './innerpage.guard';

describe('InnerpageGuard', () => {
  let guard: InnerpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InnerpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
