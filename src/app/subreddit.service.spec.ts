import { TestBed, inject } from '@angular/core/testing';

import { SubredditService } from './subreddit.service';

describe('SubredditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubredditService]
    });
  });

  it('should ...', inject([SubredditService], (service: SubredditService) => {
    expect(service).toBeTruthy();
  }));
});
