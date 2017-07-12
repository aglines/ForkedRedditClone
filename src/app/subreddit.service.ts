import { Injectable } from '@angular/core';
import { Subreddit } from './subreddit.model';
import { UserPost } from './user-post.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class SubredditService {
  subreddits: FirebaseListObservable<any[]>;
  posts: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase,
    private route: ActivatedRoute
  ) {
    this.subreddits = database.list('subreddits');
    this.posts = database.list('posts');
  }

  // sub service
  getSubreddits() {
    return this.subreddits;
  }

  // sub service
  getSubredditById(subredditId: string): FirebaseObjectObservable<any> {
    return this.database.object(`subreddits/${subredditId}`);
  }

  // sub service
  getSubredditPosts(subredditId: string): FirebaseListObservable<any[]> {
    return this.database.list(`subreddits/${subredditId}/userPosts`);
  }

  // sub service
  getSubredditTitle(subredditId: number): FirebaseObjectObservable<any> {
    return this.database.object(`subreddist/${subredditId}/title`);
  }

  // sub service?
  getSubredditTitleFromUrl(): FirebaseObjectObservable<any> {
    let subredditId: string;
    this.route.params.forEach(param => subredditId = param['id']);
    return this.database.object(`subreddits/${subredditId}/title`);
  }

  // sub service?
  addPost(postTitle: string, postContent: string, targetSubredditId: string): void {
    const postToAdd: UserPost = new UserPost(postTitle, postContent, []);
    // const targetSub = this.getSubredditById(targetSubredditId);
    // targetSub.userPosts.push()
    this.posts.push(postToAdd);

  }

  // post service
  getPostById(postId: string): FirebaseObjectObservable<any> {
    return this.database.object(`posts/${postId}`);
  }

  // post service
  addComment(commentToAdd: string, targetPostId: string): void {
    // const post = this.getPostById(targetPostId);
    // post.comments.push(commentToAdd);

    // this.posts.targetPostId.comments.push(commentToAdd);
  }
}
