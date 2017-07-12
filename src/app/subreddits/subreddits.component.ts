import { Component, OnInit } from '@angular/core';
import { Subreddit } from './../subreddit.model';
import { SubredditService } from './../subreddit.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-subreddits',
  templateUrl: './subreddits.component.html',
  styleUrls: ['./subreddits.component.css'],
  providers: [SubredditService]
})

export class SubredditsComponent implements OnInit {

  subreddits: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private subredditService: SubredditService
  ) { }

  ngOnInit(): void {
    this.subreddits = this.subredditService.getSubreddits();
  }
}
