import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
