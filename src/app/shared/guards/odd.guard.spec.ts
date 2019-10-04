import { TestBed, async, inject } from '@angular/core/testing';

import { OddGuard } from './odd.guard';

describe('OddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OddGuard]
    });
  });

  it('should ...', inject([OddGuard], (guard: OddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
