import { Component } from '@angular/core';


interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}


@Component({
  selector: 'app-game-code-vibes',
  standalone: true,
  imports: [],
  templateUrl: './game-code-vibes.component.html',
  styleUrl: './game-code-vibes.component.scss'
})
export class GameCodeVibesComponent {

  cards: Card[] = [];


  allImages: string[] = Array.from(
    { length: 18 },
    (_, i) => `./assets/img/cards/GameVibes/game_vibes${i + 1}.png`
  );


  ngOnInit() {
    this.createBoard(16);
  }

  createBoard(size: number) {
    const pairs = size / 2;
    const images = this.allImages.slice(0, pairs);
    const doubled = images.concat(images);

    this.cards = this.shuffle(doubled).map((image, index) => ({
      id: index,
      image,
      flipped: false,
      matched: false,
    }));
  }

  shuffle(array: string[]): string[] {
    const alt = [...array];   // Kopie des Stapels
    const neu: string[] = []; // neuer, gemischter Stapel

    while (alt.length > 0) {
      const zufall = Math.floor(Math.random() * alt.length); // zufällige Position
      const karte = alt.splice(zufall, 1)[0];                // Karte herausnehmen
      neu.push(karte);                                       // auf neuen Stapel legen
    }

    return neu;
  }

}
