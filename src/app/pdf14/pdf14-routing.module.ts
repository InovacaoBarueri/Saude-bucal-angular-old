import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf14Page } from './pdf14.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf14PageRoutingModule {}
