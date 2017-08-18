import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage} from '../pages/dashboard/dashboard';
import { GenresPage} from '../pages/genres/genres';

import { BookdetailsPage} from '../pages/bookdetails/bookdetails';
import { LoginPage} from '../pages/login/login';

import { ApiserviceProvider } from '../providers/apiservice/apiservice';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    GenresPage,
    BookdetailsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    GenresPage,
    BookdetailsPage,
    LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiserviceProvider
  ]
})
export class AppModule {}
