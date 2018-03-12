import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropagandaComponent } from './propaganda.component';

const adminRoutes: Routes = [
  {
    path: 'dragula',
    component: PropagandaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PropagandaRoutingModule {}
