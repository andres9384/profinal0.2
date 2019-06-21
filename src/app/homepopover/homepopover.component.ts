import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-homepopover',
  templateUrl: './homepopover.component.html',
  styleUrls: ['./homepopover.component.scss'],
})
export class HomepopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  doc(){
    window.open()
this.popoverController.dismiss();
  }
  close(){
    this.popoverController.dismiss();
      }
}
