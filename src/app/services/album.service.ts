import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:8080/api/albums'; // Adresse de votre back-end

  constructor(private http: HttpClient) {}

  // Récupérer tous les albums
  getAllAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)

  }

  // Récupérer un album par ID
  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouvel album
  createAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  // Supprimer un album
  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  uploadImage(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post<string>(`${this.apiUrl}/upload`, formData, {
      responseType: 'text' as 'json',
    });
  }

  addAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  getPagedAlbums(page: number, size: number, sortBy: string, direction: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/paged`, {
      params: {
        page: page.toString(),
        size: size.toString(),
        sortBy,
        direction,
      },
    });
  }

}
