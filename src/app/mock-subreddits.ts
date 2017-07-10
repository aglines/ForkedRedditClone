import { Subreddit } from "./subreddit.model";
import { UserPost } from "./user-post.model";

export const SUBREDDITS: Subreddit[] = [
  new Subreddit('Jokes', [
    new UserPost('What do you get when you cross something with another thing?', 'Nothing!', [
      'first',
      'second',
      '*flames*'
    ], 1),
    new UserPost('A man walks into a bar...', 'He said ouch!', [
      'first',
      'second',
      '*flames*'
    ], 2)
  ], 1),

  new Subreddit('Programming', [
    new UserPost('JavaScript is: ...', 'great', [
      'agree',
      'disagee',
      '*more flames*'
    ], 3),
    new UserPost("What is 'this'?", 'nobody knows', [
      'first',
      'agree',
      '*flames*'
    ], 4)
  ], 2)
];
