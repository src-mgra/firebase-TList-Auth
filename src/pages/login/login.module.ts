import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AngularFireAuthProvider } from 'angularfire2/auth';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ],
  providers: [AngularFireAuthProvider]
})
export class LoginPageModule {}
