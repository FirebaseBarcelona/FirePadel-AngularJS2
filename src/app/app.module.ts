import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourtComponent } from './court/court.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdCardModule} from "@angular2-material/card";
import {MdIconModule, MdIconRegistry} from "@angular2-material/icon";
import {MdButtonModule} from "@angular2-material/button";

@NgModule({
  declarations: [
    AppComponent,
    CourtComponent,
    ChatWindowComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
