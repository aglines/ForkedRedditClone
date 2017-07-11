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
    // for(let i = 0; i < SUBREDDITS.length; i++) {
    //   for(let j = 0; j < SUBREDDITS[i].userPosts.length; j++) {
    //     if (SUBREDDITS[i].userPosts[j].id === id) {
    //       return SUBREDDITS[i].userPosts[j]
    //     }
    //   }
    // }
    //
    // better version below

    return this.getAllPosts().filter(post => post.id === id)[0];
  }

  getSubredditTitleByPostID(id: number): string {
    // for(let i = 0; i < SUBREDDITS.length; i++) {
    //   for(let j = 0; j < SUBREDDITS[i].userPosts.length; j++) {
    //     if (SUBREDDITS[i].userPosts[j].id === id) {
    //       return SUBREDDITS[i].title;
    //     }
    //   }
    // }
    //
    // better version below

    return SUBREDDITS.filter(sub => sub.userPosts.filter(post => post.id === id).length === 1)[0].title
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
    const posts = this.getAllPosts();
    // let generatedId = 0;
    //
    // for(let i = 0; i < posts.length; i++) {
    //   if (posts[i].id > generatedId) {
    //     generatedId = posts[i].id;
    //   }
    // }

    // return generatedId + 1;

    return posts[posts.length - 1].id + 1
  }

  getAllPosts(): UserPost[] {
    // let output = [];
    //
    // SUBREDDITS.forEach(sub => {
    //   output.push(...sub.userPosts);
    // });
    //
    // return output;

    return SUBREDDITS.reduce((prev, curr) => [...prev, ...curr.userPosts], [])
  }
}
