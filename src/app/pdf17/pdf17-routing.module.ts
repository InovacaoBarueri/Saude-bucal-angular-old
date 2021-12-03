import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf17Page } from './pdf17.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf17PageRoutingModule {}
