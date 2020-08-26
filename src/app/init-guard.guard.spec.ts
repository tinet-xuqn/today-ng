import { TestBed } from '@angular/core/testing';

import { InitGuardGuard } from './init-guard.guard';

describe('InitGuardGuard', () => {
  let guard: InitGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
