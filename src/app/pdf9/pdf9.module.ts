import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf9PageRoutingModule } from './pdf9-routing.module';

import { Pdf9Page } from './pdf9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf9PageRoutingModule
  ],
  declarations: [Pdf9Page]
})
export class Pdf9PageModule {}
