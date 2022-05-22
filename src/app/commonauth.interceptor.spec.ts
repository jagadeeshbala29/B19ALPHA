import { TestBed } from '@angular/core/testing';

import { CommonauthInterceptor } from './commonauth.interceptor';

describe('CommonauthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CommonauthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CommonauthInterceptor = TestBed.inject(CommonauthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
