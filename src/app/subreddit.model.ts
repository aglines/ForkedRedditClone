import { UserPost } from './user-post.model';

export class Subreddit {
  constructor(
    public title: string,
    public userPosts: UserPost[],
    public id: number
  ) {}
}
