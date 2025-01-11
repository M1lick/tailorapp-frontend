import { Component } from '@angular/core';
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private albumService: AlbumService) {}
  services = [
    { title: 'Couture', description: 'Service de couture sur mesure.' },
    { title: 'Réparation', description: 'Réparation de vêtements.' },
    { title: 'Création de modèles', description: 'Conception de modèles personnalisés.' }
  ];
  albums: any[] = [];
  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe(data => {
      this.albums = data;
    });
  }


  goToContact() {
    window.location.href = '/contact'; // Redirection vers la page Contact
  }

}
