import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf10Page } from './pdf10.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf10PageRoutingModule {}
