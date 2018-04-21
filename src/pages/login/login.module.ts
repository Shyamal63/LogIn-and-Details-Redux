import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxFormModule } from '@angular-redux/form';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxFormModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
