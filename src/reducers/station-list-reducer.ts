import { LoginActions } from '../actions/login-actions';
import { Action } from 'redux';
import { SessionData } from '../core/session-model';
import { LoadingData } from '../core/loading-model';
import { StationListActions } from '../actions/station-list-actions';

const INITIAL_STATE: LoadingData = {
    station: null,
    loading: false,
     error: "",
};
type Payload=any;
type Error=any;
export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function stationReducer(state: LoadingData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): LoadingData {
  switch (action.type) {
    case StationListActions.LOADING_START:
      return {
        ...state,
        station: null,
        loading: true,
        error: null,
      };
    case StationListActions.LOADING_SUCCESS:
      return {
        ...state,
        station:action.payload,
        loading: false,
        error: null,
      };
    case StationListActions.LOADING_ERROR:
      return {
        ...state,
        station: null,
        loading: false,
        error: action.error
      };
  }

  return state;
}
