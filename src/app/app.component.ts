import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  brygg: string;
}

const HEROES: Hero[] = [
  { id: 10, name: 'Austmann', brygg: 'Utpå' },
  { id: 11, name: 'Austmann', brygg: 'Coffee Porter' },
  { id: 12, name: 'Austmann', brygg: 'Onkel i Amerika' },
  { id: 13, name: 'Austmann', brygg: 'Hoppy blond' },
  { id: 14, name: 'Austmann', brygg: 'IPA' },
  { id: 15, name: 'Austmann', brygg: 'Cucumber cooler' },
  { id: 16, name: 'Austmann', brygg: 'Saphed White IPA' },
  { id: 17, name: 'Austmann', brygg: 'Double box fresh' },
  { id: 18, name: 'Austmann', brygg: 'Ferdaminne double' },
  { id: 20, name: 'Cervisiam', brygg: 'Bad mango' },
  { id: 21, name: 'Cervisiam', brygg: 'Hopbernie Sanders' },
  { id: 22, name: 'Cervisiam', brygg: 'Jungle juice' },
  { id: 23, name: 'Cervisiam', brygg: 'S’morebidly Obese' },
  { id: 30, name: 'Fjord bryggeri', brygg: 'Snillfjord' },
  { id: 31, name: 'Fjord bryggeri', brygg: 'Valsøyfjord' },
  { id: 32, name: 'Fjord bryggeri', brygg: 'Bærtur' },
  { id: 33, name: 'Fjord bryggeri', brygg: 'Hemnefjord' },
  { id: 34, name: 'Fjord bryggeri', brygg: 'Skålvikfjord' },
  { id: 35, name: 'Fjord bryggeri', brygg: 'Vinjefjord' },
  { id: 36, name: 'Fjord bryggeri', brygg: 'Magerøya' },
  { id: 37, name: 'Fjord bryggeri', brygg: 'Lille Rødhette' },
  { id: 40, name: 'Hogna brygg', brygg: 'Fargo' },
  { id: 41, name: 'Hogna brygg', brygg: 'Kyoto' },
  { id: 42, name: 'Hogna brygg', brygg: '1332' },
  { id: 43, name: 'Hogna brygg', brygg: 'Pilgrim' },
  { id: 44, name: 'Hogna brygg', brygg: 'IDA' },
  { id: 44, name: 'Hogna brygg', brygg: 'Rødskjegg' },
  { id: 44, name: 'Hogna brygg', brygg: 'Kardinal' },
  { id: 50, name: 'Monkey brew', brygg: 'Session Darwin Session' },
  { id: 51, name: 'Monkey brew', brygg: 'Plato Pale' },
  { id: 52, name: 'Monkey brew', brygg: 'Pavlov Porter' },
  { id: 53, name: 'Monkey brew', brygg: 'Demon Box 2017' },
  { id: 60, name: 'Namdalsbryggeriet', brygg: 'Namsen' },
  { id: 61, name: 'Namdalsbryggeriet', brygg: 'Staut' },
  { id: 62, name: 'Namdalsbryggeriet', brygg: 'Våronn' },
  { id: 63, name: 'Namdalsbryggeriet', brygg: 'Mild' },
  { id: 64, name: 'Namdalsbryggeriet', brygg: 'Øyrtæv' },
  { id: 70, name: 'Randhav bryggeri', brygg: 'Euxoa Annir Saison' },
  { id: 71, name: 'Randhav bryggeri', brygg: 'Tahiti Blonde' },
  { id: 72, name: 'Randhav bryggeri', brygg: 'Orohena IPA' },
  { id: 73, name: 'Randhav bryggeri', brygg: 'Annir Saison' },
  { id: 80, name: 'Rena bryggeri', brygg: 'Birkebeiner' },
  { id: 81, name: 'Rena bryggeri', brygg: 'Baron' },
  { id: 82, name: 'Rena bryggeri', brygg: 'Bajas' },
  { id: 90, name: 'Røros bryggeri', brygg: 'Gottes Glück-Thamsøl' },
  { id: 91, name: 'Røros bryggeri', brygg: 'Sabrura' },
  { id: 92, name: 'Røros bryggeri', brygg: 'IDA' },
  { id: 100, name: 'Stokkøy bryggeri', brygg: 'Pale Ale' },
  { id: 101, name: 'Stokkøy bryggeri', brygg: 'Kayak Wit' },
  { id: 102, name: 'Stokkøy bryggeri', brygg: 'Kaffeøl' },
  { id: 103, name: 'Stokkøy bryggeri', brygg: 'Fosenøl' },
  { id: 104, name: 'Stokkøy bryggeri', brygg: 'Brown Ale' },
  { id: 105, name: 'Stokkøy bryggeri', brygg: 'Tindved Trippel' },
  { id: 110, name: 'To tårn bryggeri', brygg: 'Gasse Gose' },
  { id: 111, name: 'To tårn bryggeri', brygg: 'Cream Ale' },
  { id: 112, name: 'To tårn bryggeri', brygg: 'Pale Ale' },
  { id: 113, name: 'To tårn bryggeri', brygg: 'IPA' },
  { id: 114, name: 'To tårn bryggeri', brygg: 'Ørderøl' },
  { id: 115, name: 'To tårn bryggeri', brygg: 'Skottgodt' },
  { id: 120, name: 'Valset gaardsbryggeri', brygg: 'Valset Pale' },
  { id: 121, name: 'Valset gaardsbryggeri', brygg: 'Indiaøl' },
  { id: 122, name: 'Valset gaardsbryggeri', brygg: 'Festival øl' },
  { id: 123, name: 'Valset gaardsbryggeri', brygg: 'Valset Saison' },
  { id: 124, name: 'Valset gaardsbryggeri', brygg: 'Hvete bringebær' },
  { id: 125, name: 'Valset gaardsbryggeri', brygg: 'Raus' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Avstemning';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
