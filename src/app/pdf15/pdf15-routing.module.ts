import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf15Page } from './pdf15.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf15PageRoutingModule {}
