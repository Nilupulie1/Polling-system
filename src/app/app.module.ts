import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotingLayoutComponent } from './voting-layout/voting-layout.component';
import { CountUpModule } from 'countup.js-angular2';
// import {votingPanel} from './voting-layout/voting-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingLayoutComponent
    // votingPanel
  ],
  imports: [
    BrowserModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
