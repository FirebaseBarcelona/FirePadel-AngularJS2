import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {CourtComponent} from './court/court.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {ChatMessageComponent} from './chat-message/chat-message.component';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {MdButtonModule} from '@angular2-material/button';
import {AngularFireModule} from 'angularfire2';


export const firebaseConfig = {
  apiKey: 'AIzaSyBWTxmNMGCyjdZtVnYpA6XrQgxPWiQo2nc',
  authDomain: 'padel-109d5.firebaseapp.com',
  databaseURL: 'https://padel-109d5.firebaseio.com',
  storageBucket: 'padel-109d5.appspot.com',
};

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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
