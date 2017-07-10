import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SubredditsComponent } from './subreddits/subreddits.component';
import { TopicComponent } from './topic/topic.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SubredditsComponent,
    TopicComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
