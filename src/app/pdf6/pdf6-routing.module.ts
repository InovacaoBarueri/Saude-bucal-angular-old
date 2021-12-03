import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf6Page } from './pdf6.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf6PageRoutingModule {}
