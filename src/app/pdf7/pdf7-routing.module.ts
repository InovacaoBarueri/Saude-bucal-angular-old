import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf7Page } from './pdf7.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf7PageRoutingModule {}
