import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubredditsComponent } from './subreddits/subreddits.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SubredditsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
