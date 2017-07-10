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
    const subreddit = SUBREDDITS.filter(sub => sub.id === id)[0];
    console.log(subreddit.userPosts)
    return subreddit.userPosts;
  }
}
