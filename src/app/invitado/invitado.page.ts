import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HomepopoverComponent } from '../homepopover/homepopover.component';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage implements OnInit {

  title : String;  
  number: number;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.title = 'My first AGM project';
    this.number = 51.678418;
    this.number = 7.809007;
  }
  async mostrarpop(event){
    const popover = await this.popoverController.create({
      component: HomepopoverComponent,
      
    event,
  mode:"ios",
 });
    return await popover.present();
  } 

}
