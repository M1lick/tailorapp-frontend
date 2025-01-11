import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../../services/album.service';
import {AlbumDetailsService} from '../../services/album-details.service';

@Component({
  selector: 'app-album-detail',
  standalone: false,

  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  likesCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private albumDetailsService: AlbumDetailsService
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID depuis l'URL
    this.getAlbumDetails(albumId);
  }

  // Récupérer les détails de l'album
  getAlbumDetails(id: number): void {
    this.albumDetailsService.getAlbumDetails(id).subscribe((data) => {
      this.album = data;
      this.likesCount = data.likes || 0;
    });
  }

  // Ajouter un "j'aime" à l'album
  likeAlbum(): void {
    if (this.album && this.album.id) {
      this.albumDetailsService.likeAlbum(this.album.id).subscribe(() => {
        this.likesCount += 1; // Incrémente le compteur de likes
      });
    }
  }
}
