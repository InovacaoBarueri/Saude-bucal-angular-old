import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf15PageRoutingModule } from './pdf15-routing.module';

import { Pdf15Page } from './pdf15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf15PageRoutingModule
  ],
  declarations: [Pdf15Page]
})
export class Pdf15PageModule {}
