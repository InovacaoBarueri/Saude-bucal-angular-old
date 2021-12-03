import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf16Page } from './pdf16.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf16PageRoutingModule {}
