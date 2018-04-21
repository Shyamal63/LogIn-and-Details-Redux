import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 details:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var pumpDetails=this.navParams.get('details');
    console.log(pumpDetails);
    if(pumpDetails){
       this.details=pumpDetails;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
