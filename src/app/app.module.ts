import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotingLayoutComponent } from './voting-layout/voting-layout.component';
import { CountUpModule } from 'countup.js-angular2';


@NgModule({
  declarations: [
    AppComponent,
    VotingLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
