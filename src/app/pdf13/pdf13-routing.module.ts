import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf13Page } from './pdf13.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf13PageRoutingModule {}
