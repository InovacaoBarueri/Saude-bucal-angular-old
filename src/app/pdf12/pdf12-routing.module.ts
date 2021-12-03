import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf12Page } from './pdf12.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf12PageRoutingModule {}
