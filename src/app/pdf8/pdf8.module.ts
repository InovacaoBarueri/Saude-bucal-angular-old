import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf8PageRoutingModule } from './pdf8-routing.module';

import { Pdf8Page } from './pdf8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf8PageRoutingModule
  ],
  declarations: [Pdf8Page]
})
export class Pdf8PageModule {}
