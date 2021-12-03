import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf11PageRoutingModule } from './pdf11-routing.module';

import { Pdf11Page } from './pdf11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf11PageRoutingModule
  ],
  declarations: [Pdf11Page]
})
export class Pdf11PageModule {}
