import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { API_URL,ERRORS } from '../core/app-constants';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { StationListActions } from '../actions/station-list-actions';

@Injectable()
export class StationEpics {
  constructor(private http: HttpClient) {}
  station = (action$: ActionsObservable<any>) => {
    return action$.ofType(StationListActions.LOADING_START)
      .mergeMap(({payload}) => {
        return this.http.get(API_URL.STATION_LIST, payload)
          .map(result => ({
            type: StationListActions.LOADING_SUCCESS,
            payload: result
          }))
          .catch(error => Observable.of({
            type: StationListActions.LOADING_ERROR,
            error: ERRORS.STATION_API_ERROR
          }));
        });
  }
}