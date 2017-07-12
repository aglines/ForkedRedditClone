import { Component, OnInit } from '@angular/core';
import { UserPost } from './../user-post.model';
import { SubredditService } from './../subreddit.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [SubredditService]
})

export class PostComponent implements OnInit {
  selectedPostObservable: FirebaseObjectObservable<any>;
  selectedPost;
  selectedPostComments: FirebaseListObservable<any[]>;
  selectedPostId: string = null;
  selectedPostSubreddit: string = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subredditService: SubredditService
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(urlParam => {
      this.selectedPostId = urlParam['postId'];
    });

    this.selectedPostObservable = this.subredditService.getPostById(this.selectedPostId);

    this.selectedPostObservable.subscribe(post => this.selectedPost = post);

    this.selectedPostComments = this.subredditService.getPostComments(this.selectedPostId);

    this.subredditService.getSubredditTitleFromUrl().subscribe(title => {this.selectedPostSubreddit = title.$value});
  }

  formSubmit(comment: string) {
    this.selectedPostComments.push(comment);
  }
}
