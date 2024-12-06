import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import nécessaire pour *ngIf

@Component({
  selector: 'app-popup',
  standalone: true, // Définit ce composant comme autonome
  imports: [CommonModule], // Ajoute CommonModule pour *ngIf
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() isVisible = false;
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.closePopup.emit();
  }
}
