import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';
import {LoginComponent} from './page/login/login.component';
import {ChatComponent} from './page/chat/chat.component';
import {PageModule} from "./page/page.module";
import {AppService} from "./services/app.service";
import {PushNotificationsModule} from "ng-push";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
