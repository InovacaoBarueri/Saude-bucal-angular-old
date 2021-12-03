import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf19Page } from './pdf19.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf19PageRoutingModule {}
