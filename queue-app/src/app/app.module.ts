import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ConnectComponent } from './components/connect/connect/connect.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HttpClientModule,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
