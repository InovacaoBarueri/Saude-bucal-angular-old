import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf18Page } from './pdf18.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf18PageRoutingModule {}
