import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InformacionPage } from './informacion.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InformacionPageRoutingModule } from './informacion-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InformacionPageRoutingModule
  ],
  declarations: [InformacionPage]
})
export class InformacionPageModule {}
