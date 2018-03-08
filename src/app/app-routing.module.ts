import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.Component';

const adminRoutes: Routes = [
    {
        path : 'admin',
        component : AppComponent
    },
    {
        path : '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        adminRoutes,
        {
          enableTracing: false,
        }
      )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
