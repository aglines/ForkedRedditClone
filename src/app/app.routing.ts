import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubredditsComponent } from './subreddits/subreddits.component';
import { TopicComponent } from './topic/topic.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SubredditsComponent
  },
  {
    path: 'subreddits/:id',
    component: TopicComponent
  },
  {
    path: 'subreddits/:id/:postId',
    component: PostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
