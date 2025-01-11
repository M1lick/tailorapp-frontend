import {Component, OnInit} from '@angular/core';
import {ContacteService} from '../../services/contacte.service';

@Component({
  selector: 'app-contact-list',
  standalone: false,

  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactService: ContacteService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  // Charger tous les contacts
  loadContacts(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  // Ajouter un contact
  addContact(): void {
    const newContact = { name: 'John Doe', email: 'john@example.com', message: 'Hello!' };
    this.contactService.addContact(newContact).subscribe(() => {
      this.loadContacts(); // Recharger les contacts après l'ajout
    });
  }

  // Supprimer un contact
  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.loadContacts(); // Recharger les contacts après la suppression
    });
  }

}
