import { Component, OnInit } from '@angular/core';
import { UserPost } from './../user-post.model';
import { SubredditService } from './../subreddit.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [SubredditService]
})

export class TopicComponent implements OnInit {
  subredditId: number = null;
  posts: UserPost[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subredditService: SubredditService
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParam => {
      this.subredditId = parseInt(urlParam['id']);
    });

    this.posts = this.subredditService.getPostsBySubredditId(this.subredditId);
  }
}
