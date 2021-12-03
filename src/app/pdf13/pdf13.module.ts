import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf13PageRoutingModule } from './pdf13-routing.module';

import { Pdf13Page } from './pdf13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf13PageRoutingModule
  ],
  declarations: [Pdf13Page]
})
export class Pdf13PageModule {}
