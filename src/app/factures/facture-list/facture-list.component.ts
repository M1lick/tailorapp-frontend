import {Component, OnInit} from '@angular/core';
import {FactureService} from '../../services/facture.service';

@Component({
  selector: 'app-facture-list',
  standalone: false,

  templateUrl: './facture-list.component.html',
  styleUrl: './facture-list.component.css'
})
  export class FactureListComponent implements OnInit {
  factures: any[] = [];
  searchQuery: string = '';

  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    this.loadFactures();
  }

  // Charger toutes les factures
  loadFactures(): void {
    this.factureService.getFactures().subscribe((data) => {
      this.factures = data;
    });
  }

  // Ajouter une nouvelle facture
  addFacture(): void {
    const newFacture = {
      clientName: 'John Doe',
      description: 'Service de couture',
      amount: 150,
      date: new Date().toISOString(),
    };

    this.factureService.createFacture(newFacture).subscribe(() => {
      this.loadFactures(); // Recharger après ajout
    });
  }

  // Supprimer une facture
  deleteFacture(id: number): void {
    this.factureService.deleteFacture(id).subscribe(() => {
      this.loadFactures(); // Recharger après suppression
    });
  }

  // Rechercher une facture par nom du client
  searchFactures(): void {
    this.factures = this.factures.filter((facture) =>
      facture.clientName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
