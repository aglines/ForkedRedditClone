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

  getPostById(id: number): UserPost {
    for(let i = 0; i < SUBREDDITS.length; i++) {
      for(let j = 0; j < SUBREDDITS[i].userPosts.length; j++) {
        if (SUBREDDITS[i].userPosts[j].id === id) {
          return SUBREDDITS[i].userPosts[j]
        }
      }
    }
  }

  getSubredditTitleByPostID(id: number): string {
    for(let i = 0; i < SUBREDDITS.length; i++) {
      for(let j = 0; j < SUBREDDITS[i].userPosts.length; j++) {
        if (SUBREDDITS[i].userPosts[j].id === id) {
          return SUBREDDITS[i].title;
        }
      }
    }
  }
}
