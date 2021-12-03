import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf11Page } from './pdf11.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf11PageRoutingModule {}
