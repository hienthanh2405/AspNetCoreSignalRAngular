import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http'
import { SignalRService } from './services/signal-r.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    SignalRService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
