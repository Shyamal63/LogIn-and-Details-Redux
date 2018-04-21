import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StationListActions } from '../../actions/station-list-actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { StationList } from '../../core/loading-model';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the StationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-station-list',
  templateUrl: 'station-list.html',
})
export class StationListPage {
  @select(['StationData', 'station'])
  readonly station: Observable<StationList[]>;

  @select(['StationData', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['StationData', 'error'])
  readonly error$: Observable<string>;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public stationlistactions:StationListActions) {
    this.stationlistactions.loadingUser({});
    var newStation=this.station.subscribe((success)=>{
      console.log(success);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationListPage');
  }
  clickDetails(stationList){
    console.log(stationList);
    this.navCtrl.push(DetailsPage,{details:stationList});

  }

}
