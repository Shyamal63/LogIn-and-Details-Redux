import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { SessionData } from '../core/session-model';
import { IAppState } from '../core/store-model';

@Injectable()
export class StationListActions {

  static LOADING_START = 'LOADING_START';
  static LOADING_SUCCESS = 'LOADING_SUCCESS';
  static LOADING_ERROR = 'LOADING_ERROR';


  constructor(private ngRedux: NgRedux<IAppState>) {}


  loadingUser(credentials){
    this.ngRedux.dispatch({
      type: StationListActions.LOADING_START,
      payload: credentials,
    });
  };

  

}