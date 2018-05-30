import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { VoteSettingComponent } from './vote-setting/vote-setting.component';
import { NewComponent } from './new/new.component';
import { VotingMediasComponent } from './voting-medias/voting-medias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    CreateNewComponent,
    VoteSettingComponent,
    NewComponent,
    VotingMediasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
