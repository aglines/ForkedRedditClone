import { Component, OnInit } from '@angular/core';
import { UserPost } from './../user-post.model';
import { SubredditService } from './../subreddit.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [SubredditService]
})

export class PostComponent implements OnInit {
  selectedPost: UserPost;
  selectedPostId: number = null;
  selectedPostSubreddit: string = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subredditService: SubredditService
  ) { }

  formSubmit(comment: string) {
    this.subredditService.addComment(comment, this.selectedPostId);
  }

  ngOnInit(): void {
    this.route.params.forEach(urlParam => {
      this.selectedPostId = Number(urlParam['postId']);
    });

    this.selectedPost = this.subredditService.getPostById(this.selectedPostId);
    this.selectedPostSubreddit = this.subredditService.getSubredditTitleByPostId(this.selectedPostId);
  }

}
