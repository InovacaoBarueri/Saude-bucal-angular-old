import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf14PageRoutingModule } from './pdf14-routing.module';

import { Pdf14Page } from './pdf14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf14PageRoutingModule
  ],
  declarations: [Pdf14Page]
})
export class Pdf14PageModule {}
