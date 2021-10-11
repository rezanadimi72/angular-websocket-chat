import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from "./page.component";

import {PagesRoutingModule} from "./pages-routing.module";
import {ChatComponent} from "./chat/chat.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {PushNotificationsModule} from "ng-push";


@NgModule({
  declarations: [
    PageComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    FormsModule,

  ]
})
export class PageModule {
}
