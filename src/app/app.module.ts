import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitApplicationComponent,
    ViewApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
