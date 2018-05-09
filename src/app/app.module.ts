import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotingLayoutComponent } from './voting-layout/voting-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    VotingLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
