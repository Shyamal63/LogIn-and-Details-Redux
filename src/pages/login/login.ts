import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select } from '@angular-redux/store';
import { LoginActions } from '../../actions/login-actions';
import { UserData }from '../../core/session-model';
import { IAppState } from '../../core/store-model';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { StationListPage } from '../station-list/station-list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{ 
  public username:any;
  public password:any;
  @select(['session', 'user'])
  readonly user$: Observable<UserData>;

  @select(['session', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['session', 'error'])
  readonly error$: Observable<string>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginactions:LoginActions,public ngRedux: NgRedux<IAppState>) {
    this.username="",
    this.password="";
    var userDetails=this.user$.subscribe((success)=>{
      console.log(success);
      if(success!=null){
        if(success.token){
          this.navCtrl.setRoot(StationListPage);
        }
        
      }
    })
  }
  login(){
     console.log(this.username);
     this.loginactions.loginUser({email:this.username,password:this.password});

  }
}
