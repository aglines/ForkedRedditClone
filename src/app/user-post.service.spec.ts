import { TestBed, inject } from '@angular/core/testing';

import { UserPostService } from './user-post.service';

describe('UserPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPostService]
    });
  });

  it('should ...', inject([UserPostService], (service: UserPostService) => {
    expect(service).toBeTruthy();
  }));
});
