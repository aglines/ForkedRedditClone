import { Injectable } from '@angular/core';
import { Subreddit } from './subreddit.model';
import { SUBREDDITS } from './mock-subreddits';
import { UserPost } from './user-post.model';

@Injectable()
export class SubredditService {

  constructor() { }

  getSubreddits(): Subreddit[] {
    return SUBREDDITS;
  }

  getPostsBySubredditId(id: number): UserPost[] {
    return SUBREDDITS.filter(sub => sub.id === id)[0].userPosts;
  }

  getSubredditTitle(id: number): string {
    return SUBREDDITS.filter(sub => sub.id === id)[0].title;
  }
}
