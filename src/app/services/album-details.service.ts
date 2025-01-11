import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsService {

  private apiUrl = 'http://localhost:8080/api/albums'; // URL de base de l'API pour les albums

  constructor(private http: HttpClient) {}

  // Récupérer les détails d'un album par son ID
  getAlbumDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour le compteur de "j'aime" pour un album
  likeAlbum(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/like`, null); // POST sans corps
  }
}
