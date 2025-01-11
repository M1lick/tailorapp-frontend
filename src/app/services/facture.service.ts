import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiUrl = 'http://localhost:8080/api/factures'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les factures
  getFactures(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter une nouvelle facture
  createFacture(facture: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, facture);
  }

  // Supprimer une facture par ID
  deleteFacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
