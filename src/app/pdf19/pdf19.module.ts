import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf19PageRoutingModule } from './pdf19-routing.module';

import { Pdf19Page } from './pdf19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf19PageRoutingModule
  ],
  declarations: [Pdf19Page]
})
export class Pdf19PageModule {}
