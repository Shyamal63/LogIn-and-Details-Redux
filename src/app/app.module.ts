import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension, } from '@angular-redux/store';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgReduxFormModule } from '@angular-redux/form';
import { AgmCoreModule } from '@agm/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import { IAppState } from '../core/store-model';
import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components-module';
import { HomePage } from '../pages/home/home';
import { LoginActions } from '../actions/login-actions';
import { LoginEpics } from '../epics/login-epics';
import { loginReducer } from '../reducers/login-form-reducer';
import { StationListPageModule } from '../pages/station-list/station-list.module';
import { StationEpics } from '../epics/station-epic';
import { stationReducer } from '../reducers/station-list-reducer';
import { StationListActions } from '../actions/station-list-actions';
import { DetailsPageModule } from '../pages/details/details.module';



@NgModule({
  declarations: [
    MyApp,
     HomePage,
  ],
  imports: [
    HttpModule,
    NgReduxModule,
    ReactiveFormsModule,
    FormsModule,
    NgReduxFormModule,
    AgmCoreModule,
    LoginPageModule,
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    StationListPageModule,
    DetailsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage,
   
  ],
  providers: [
    StatusBar,
    LoginActions,
    SplashScreen,
    LoginEpics,
    StationEpics,
    StationListActions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor( public store: NgRedux<IAppState>, public fepic:LoginEpics,public stnepic:StationEpics)
    {
      let rootReducer = combineReducers({
        session:loginReducer,
        StationData:stationReducer
      });
      store.configureStore(rootReducer,{},[createLogger(),createEpicMiddleware(fepic.login),createEpicMiddleware(stnepic.station)]);
    }

}
