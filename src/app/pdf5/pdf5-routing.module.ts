import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf5Page } from './pdf5.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf5PageRoutingModule {}
