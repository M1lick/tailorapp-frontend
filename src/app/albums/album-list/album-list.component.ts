import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  standalone: false,

  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit {
  constructor(private albumSevice:AlbumService) {
  }
  albums: any[] = [];
  totalItems = 0; // Nombre total d'albums
  page = 0; // Page actuelle
  pageSize = 6; // Nombre d'albums par page
  sortBy = 'id'; // Tri par défaut
  direction = 'asc'; // Direction par défaut

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumSevice.getPagedAlbums(this.page, this.pageSize, this.sortBy, this.direction)
      .subscribe(response => {
        this.albums = response.content;
        this.totalItems = response.totalElements;
      });
  }

// Méthodes pour changer de page
  changePage(newPage: number): void {
    this.page = newPage;
    this.loadAlbums();
  }

// Méthode pour changer le tri
  changeSorting(event: Event, direction: string): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    console.log('Tri par :', value, 'Direction :', direction);
  }

  protected readonly onselect = onselect;
}
