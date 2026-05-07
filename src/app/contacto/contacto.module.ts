import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoPage } from './contacto.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactoPageRoutingModule } from './contacto-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContactoPageRoutingModule
  ],
  declarations: [ContactoPage]
})
export class ContactoPageModule {}
