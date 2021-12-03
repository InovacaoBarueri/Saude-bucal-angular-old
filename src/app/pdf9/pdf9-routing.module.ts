import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf9Page } from './pdf9.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf9PageRoutingModule {}
