import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.Component';
import { PropagandaComponent } from './propaganda/propaganda.component';

const adminRoutes: Routes = [
    {
        path : 'admin',
        component : AppComponent
    },
    {
        path : '',
        redirectTo : '/dragula',
        pathMatch: 'full'
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
