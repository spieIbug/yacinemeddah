import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SecurityInterceptor} from "./security.interceptor";
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
