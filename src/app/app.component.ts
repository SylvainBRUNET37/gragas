import { Component, OnInit } from '@angular/core';
import { PopupComponent } from './popup/popup.component'; // Import du composant Popup

@Component({
  selector: 'app-root',
  standalone: true, // Définit ce composant comme autonome
  imports: [PopupComponent], // Ajoute le PopupComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  popupVisible = false; // Par défaut, le pop-up est caché.

  ngOnInit() {
    // Affiche le pop-up dès le chargement de la page.
    this.popupVisible = true;
  }
}
