import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { SessionData } from '../core/session-model';
import { IAppState } from '../core/store-model';

@Injectable()
export class LoginActions {

  static LOGIN_USER = 'LOGIN_USER';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
  static LOGOUT_USER = 'LOGOUT_USER';
  static LOGIN_FORM_RESET = 'LOGIN_FORM_RESET';

  constructor(private ngRedux: NgRedux<IAppState>) {}


  loginUser(credentials){
    this.ngRedux.dispatch({
      type: LoginActions.LOGIN_USER,
      payload: credentials,
    });
  };

  

}