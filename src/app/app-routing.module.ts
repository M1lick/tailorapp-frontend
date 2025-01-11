import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlbumListComponent} from './albums/album-list/album-list.component';
import {AlbumDetailComponent} from './albums/album-detail/album-detail.component';
import {FactureListComponent} from './factures/facture-list/facture-list.component';
import {ContactComponent} from './contact/contact-list/contact-list.component';
import {AddAlbumComponent} from './add-album/add-album.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'factures', component: FactureListComponent },
  { path: 'add-album', component: AddAlbumComponent }, // Route pour ajouter un album


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
