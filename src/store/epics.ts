import { Injectable } from '@angular/core';
import { LoginEpics } from '../epics/login-epics'
import { createEpicMiddleware } from 'redux-observable';
@Injectable()
export class RootEpics {
  constructor(private loginepics: LoginEpics,
   
  ) {}

  public createEpics() {
    return [
        createEpicMiddleware(this.loginepics.login),
    ];
  }
}
