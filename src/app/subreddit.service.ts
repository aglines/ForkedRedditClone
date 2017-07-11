import { Injectable } from '@angular/core';
import { Subreddit } from './subreddit.model';
import { SUBREDDITS } from './mock-subreddits';
import { UserPost } from './user-post.model';

@Injectable()
export class SubredditService {

  constructor() { }

  // sub service
  getSubreddits(): Subreddit[] {
    return SUBREDDITS;
  }

  // sub service
  getSubredditById(subredditId: number): Subreddit {
    return SUBREDDITS.filter(sub => sub.id === subredditId)[0];
  }

  // sub service
  getSubredditPosts(subredditId: number): UserPost[] {
    return this.getSubredditById(subredditId).userPosts;
  }

  // sub service
  getSubredditTitle(subredditId: number): string {
    return this.getSubredditById(subredditId).title;
  }

  // sub service?
  getSubredditTitleByPostId(postId: number): string {
    // for(let i = 0; i < SUBREDDITS.length; i++) {
    //   for(let j = 0; j < SUBREDDITS[i].userPosts.length; j++) {
    //     if (SUBREDDITS[i].userPosts[j].id === postId) {
    //       return SUBREDDITS[i].title;
    //     }
    //   }
    // }
    //
    // better version below

    return SUBREDDITS.filter(sub => sub.userPosts.filter(post => post.id === postId).length === 1)[0].title;
  }

  // sub service?
  addPost(postTitle: string, postContent: string, targetSubredditId: number): void {
    const targetSubreddit = this.getSubredditById(targetSubredditId);
    targetSubreddit.userPosts.push(new UserPost(postTitle, postContent, [], this.generatePostId()));
  }




  // post service
  getPostById(postId: number): UserPost {
    // for(let i = 0; i < SUBREDDITS.length; i++) {
    //   for(let j = 0; j < SUBREDDITS[i].userPosts.length; j++) {
    //     if (SUBREDDITS[i].userPosts[j].id === postId) {
    //       return SUBREDDITS[i].userPosts[j]
    //     }
    //   }
    // }
    //
    // better version below

    return this.getAllPosts().filter(post => post.id === postId)[0];
  }

  // post service
  getAllPosts(): UserPost[] {
    // let output = [];
    //
    // SUBREDDITS.forEach(sub => {
    //   output.push(...sub.userPosts);
    // });
    //
    // return output;
    //
    // better version below

    return SUBREDDITS.reduce((prev, curr) => [...prev, ...curr.userPosts], []);
  }

  // post service
  addComment(commentToAdd: string, targetPostId: number): void {
    const post = this.getPostById(targetPostId);
    post.comments.push(commentToAdd);
  }

  // post service
  generatePostId(): number {
    const posts = this.getAllPosts();
    // let generatedId = 0;
    //
    // for(let i = 0; i < posts.length; i++) {
    //   if (posts[i].id > generatedId) {
    //     generatedId = posts[i].id;
    //   }
    // }

    // return generatedId + 1;
    //
    // better version below

    return posts[posts.length - 1].id + 1;
  }
}
