import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf8Page } from './pdf8.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf8PageRoutingModule {}
