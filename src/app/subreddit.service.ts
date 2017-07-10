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

  addComment(commentToAdd: string, targetPostId: number): void {
    let post = this.getPostById(targetPostId);
    post.comments.push(commentToAdd);
  }

  addPost(postTitle: string, postContent:string, targetSubredditId: number): void {
    let targetSubreddit = SUBREDDITS.filter(sub => sub.id === targetSubredditId)[0];
    targetSubreddit.userPosts.push(new UserPost(postTitle, postContent, [], this.generatePostId()));
  }

  generatePostId(): number {
    let generatedId = 0;
    let posts = this.getAllPosts();

    for(let i = 0; i < posts.length; i++) {
      if (posts[i].id > generatedId) {
        generatedId = posts[i].id;
      }
    }
    return generatedId + 1;
  }

  getAllPosts() {
    let output = [];

    SUBREDDITS.forEach(sub => {
      output.push(...sub.userPosts);
    });

    return output;
  }
}
