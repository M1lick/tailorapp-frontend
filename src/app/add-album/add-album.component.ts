import { Component } from '@angular/core';
import {AlbumService} from '../services/album.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-album',
  standalone: false,

  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})
export class AddAlbumComponent {
  newAlbum = {
    title: '',
    description: '',
    imagePath: ''
  };
  selectedFile!: File;

  constructor(private albumService: AlbumService, private router: Router) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addAlbum(): void {
    if (this.selectedFile) {
      this.albumService.uploadImage(this.selectedFile).subscribe(
        (filePath: string) => {
          this.newAlbum.imagePath = filePath; // Ajoutez le chemin de l'image au nouvel album
          this.albumService.addAlbum(this.newAlbum).subscribe(() => {
            alert('Album ajouté avec succès !');
            this.router.navigate(['/albums']);
          });
        },
        (error) => {
          console.error('Erreur lors du téléchargement de l’image :', error);
        }
      );
    } else {
      alert('Veuillez sélectionner une image.');
    }
  }

}
