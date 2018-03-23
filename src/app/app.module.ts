import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule} from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';

const firebaseConfig = {
  apiKey: "AIzaSyBRHQkt6NwAdNi_FvTadyi9j9XBXhp19Ms",
  authDomain: "test-9d049.firebaseapp.com",
  databaseURL: "https://test-9d04.firebaseio.com",
  projectId: "test-9d049",
  storageBucket: "test-9d04.appspot.com",
  messagingSenderId: "746980784601"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    AngularFireAuthProvider
  ]
})
export class AppModule {}
