import { Injectable } from '@angular/core';
import { Subreddit } from './subreddit.model';
import { SUBREDDITS } from './mock-subreddits';

@Injectable()
export class SubredditService {

  constructor() { }

  getSubreddits(): Subreddit[] {
    return SUBREDDITS;
  }
}
