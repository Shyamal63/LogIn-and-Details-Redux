import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { LoginActions } from '../actions/login-actions';
import { Observable } from 'rxjs/Observable';
import { API_URL,ERRORS } from '../core/app-constants';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class LoginEpics {
  constructor(private http: HttpClient) {}
  login = (action$: ActionsObservable<any>) => {
    return action$.ofType(LoginActions.LOGIN_USER)
      .mergeMap(({payload}) => {

        return this.http.post(API_URL.LOGIN, payload,{headers: new  HttpHeaders({ 'Content-Type': 'application/json'})})
          .map(result => ({
            type: LoginActions.LOGIN_USER_SUCCESS,
            payload: result
          }))
          .catch(error => Observable.of({
            type: LoginActions.LOGIN_USER_ERROR,
            error: ERRORS.LOGIN_API_ERROR
          }));
        });
  }
}