import { LoginActions } from '../actions/login-actions';
import { Action } from 'redux';
import { SessionData } from '../core/session-model';

const INITIAL_STATE: SessionData = {
  user: null,
  loading: false,
  error: "",
};
type Payload=any;
type Error=any;
export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function loginReducer(state: SessionData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): SessionData {
  switch (action.type) {
    case LoginActions.LOGIN_USER:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case LoginActions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user:action.payload,
        loading: false,
        error: null,
      };
    case LoginActions.LOGIN_USER_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error
      };
    case LoginActions.LOGOUT_USER:
      return {
        ...state,
        user: null,
        loading: false,
        error: null
      };
  }

  return state;
}
