import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvitadoPage } from './invitado.page';

import { AgmCoreModule } from '@agm/core';
import { HomepopoverComponent } from '../homepopover/homepopover.component';

const routes: Routes = [
  {
    path: '',
    component: InvitadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ],
  entryComponents:[HomepopoverComponent] ,
  declarations: [InvitadoPage,HomepopoverComponent]
})
export class InvitadoPageModule {}
