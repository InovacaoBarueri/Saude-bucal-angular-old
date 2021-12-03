import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf10PageRoutingModule } from './pdf10-routing.module';

import { Pdf10Page } from './pdf10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf10PageRoutingModule
  ],
  declarations: [Pdf10Page]
})
export class Pdf10PageModule {}
