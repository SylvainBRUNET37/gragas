import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, OnDestroy {
  isVisible = false;
  isNestedVisible = false;
  moveButtonInterval: any;
  intervalTime = 350; // Temps initial entre les déplacements (en ms)
  intervalDecrement = 30; // De combien réduire l'intervalle à chaque déplacement

  ngOnInit() {
    this.isVisible = true;
    this.startMovingButton(); // Commence à déplacer le bouton dès l'initialisation
  }

  ngOnDestroy() {
    // Nettoyer l'intervalle lorsque le composant est détruit
    if (this.moveButtonInterval) {
      clearInterval(this.moveButtonInterval);
    }
  }

  close() {
    this.isVisible = false;
  }

  showNestedPopup() {
    this.isNestedVisible = true;
  }

  closeNested() {
    this.isNestedVisible = false;
  }

  // Fonction pour fermer les deux pop-ups en même temps
  closeBothPopups() {
    this.isVisible = false;
    this.isNestedVisible = false;
  }

  // Fonction pour déplacer le bouton "Fermer" à une position aléatoire
  moveButtonRandomly() {
    const button = document.querySelector('button');
    if (button) {
      const randomX = Math.floor(Math.random() * (window.innerWidth - 400)); // Position aléatoire en X
      const randomY = Math.floor(Math.random() * (window.innerHeight - 400)); // Position aléatoire en Y
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }

  // Commence à déplacer le bouton avec un intervalle dynamique
  startMovingButton() {
    this.moveButtonInterval = setInterval(() => {
      this.moveButtonRandomly(); // Déplacer le bouton

      // Ralentir le mouvement au fur et à mesure en augmentant l'intervalle
      if (this.intervalTime < 1000) { // Arrêter de ralentir après un certain seuil
        this.intervalTime += this.intervalDecrement;
        clearInterval(this.moveButtonInterval); // Effacer l'intervalle précédent
        this.startMovingButton(); // Redémarrer l'intervalle avec la nouvelle vitesse
      }
    }, this.intervalTime); // Intervalle dynamique basé sur `intervalTime`
  }
}
