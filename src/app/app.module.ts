import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { ContactComponent } from './contact/contact-list/contact-list.component';
import { FactureListComponent } from './factures/facture-list/facture-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddAlbumComponent } from './add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    ContactComponent,
    FactureListComponent,
    AddAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
