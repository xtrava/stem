import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  brygg: string;
  type: string;
  styrke: string;
  beskrivelse: string ;
}

const HEROES: Hero[] = [
  { id: 10, name: 'Austmann', brygg: 'Utpå', type: 'Wit', styrke: '4,5', beskrivelse: '' },
  { id: 11, name: 'Austmann', brygg: 'Coffee Porter', type: 'Kaffeporter', styrke: '4,5', beskrivelse: '' },
  { id: 12, name: 'Austmann', brygg: 'Onkel i Amerika', type: 'Session IPA', styrke: '4,5', beskrivelse: '' },
  { id: 13, name: 'Austmann', brygg: 'Hoppy blond', type: 'Blonde ale', styrke: '4,5', beskrivelse: '' },
  { id: 14, name: 'Austmann', brygg: 'IPA', type: 'IPA', styrke: '4,5', beskrivelse: '' },
  { id: 15, name: 'Austmann', brygg: 'Cucumber cooler', type: 'Saison', styrke: '5,1', beskrivelse: '' },
  { id: 16, name: 'Austmann', brygg: 'Saphed White IPA', type: 'IPA White', styrke: '7,6', beskrivelse: '' },
  { id: 17, name: 'Austmann', brygg: 'Double box fresh', type: 'DIPA', styrke: '8,1', beskrivelse: '' },
  { id: 18, name: 'Austmann', brygg: 'Ferdaminne double', type: 'Brown Ale', styrke: '9,2', beskrivelse: '' },
  { id: 20, name: 'Cervisiam', brygg: 'Bad mango', type: 'IPA', styrke: '6,5', beskrivelse: '' },
  { id: 21, name: 'Cervisiam', brygg: 'Hopbernie Sanders', type: 'New Englang IPA', styrke: '6,5', beskrivelse: '' },
  { id: 22, name: 'Cervisiam', brygg: 'Jungle juice', type: 'Imperial IPA', styrke: '8,5', beskrivelse: '' },
  { id: 23, name: 'Cervisiam', brygg: 'S’morebidly Obese', type: 'Kakestout', styrke: '10', beskrivelse: '' },
  { id: 30, name: 'Fjord bryggeri', brygg: 'Snillfjord', type: 'Hvete', styrke: '4,7', beskrivelse: '' },
  { id: 31, name: 'Fjord bryggeri', brygg: 'Valsøyfjord', type: 'IPA', styrke: '4,7', beskrivelse: '' },
  { id: 32, name: 'Fjord bryggeri', brygg: 'Bærtur', type: 'Hveteøl m/bær', styrke: '4,7', beskrivelse: '' },
  { id: 33, name: 'Fjord bryggeri', brygg: 'Hemnefjord', type: 'Brown Ale', styrke: '4,7', beskrivelse: '' },
  { id: 34, name: 'Fjord bryggeri', brygg: 'Skålvikfjord', type: 'Brown Porter', styrke: '5,5', beskrivelse: '' },
  { id: 35, name: 'Fjord bryggeri', brygg: 'Vinjefjord', type: 'American pale ale', styrke: '5,5', beskrivelse: '' },
  { id: 36, name: 'Fjord bryggeri', brygg: 'Magerøya', type: 'American pale ale', styrke: '5,5', beskrivelse: '' },
  { id: 37, name: 'Fjord bryggeri', brygg: 'Lille Rødhette', type: 'Red ale', styrke: '6,2', beskrivelse: '' },
  { id: 40, name: 'Hogna brygg', brygg: 'Fargo', type: 'Hvete', styrke: '4,5', beskrivelse: '' },
  { id: 41, name: 'Hogna brygg', brygg: 'Kyoto', type: 'Ingefærøl', styrke: '4,5', beskrivelse: '' },
  { id: 42, name: 'Hogna brygg', brygg: '1332', type: 'Belgisk hveteøl', styrke: '4,5', beskrivelse: '' },
  { id: 43, name: 'Hogna brygg', brygg: 'Pilgrim', type: 'Brown ale', styrke: '5,5', beskrivelse: '' },
  { id: 44, name: 'Hogna brygg', brygg: 'IDA', type: 'India dark ale', styrke: '7,0', beskrivelse: '' },
  { id: 44, name: 'Hogna brygg', brygg: 'Rødskjegg', type: 'Imperial Red ale', styrke: '7,6', beskrivelse: '' },
  { id: 44, name: 'Hogna brygg', brygg: 'Kardinal', type: 'Imperial Stout', styrke: '9,0', beskrivelse: '' },
  { id: 50, name: 'Monkey brew', brygg: 'Session Darwin Session', type: 'IPA', styrke: '4,7', beskrivelse: '' },
  { id: 51, name: 'Monkey brew', brygg: 'Plato Pale', type: 'American Pale Ale', styrke: '5,9', beskrivelse: '' },
  { id: 52, name: 'Monkey brew', brygg: 'Pavlov Porter', type: 'Porter', styrke: '7,5', beskrivelse: '' },
  { id: 53, name: 'Monkey brew', brygg: 'Demon Box 2017', type: 'Russian Imp. Stout', styrke: '10,5', beskrivelse: '' },
  { id: 60, name: 'Namdalsbryggeriet', brygg: 'Namsen', type: 'Pils', styrke: '4,7', beskrivelse: '' },
  { id: 61, name: 'Namdalsbryggeriet', brygg: 'Staut', type: 'Stout', styrke: '4,7', beskrivelse: '' },
  { id: 62, name: 'Namdalsbryggeriet', brygg: 'Våronn', type: 'Saison', styrke: '4,7', beskrivelse: '' },
  { id: 63, name: 'Namdalsbryggeriet', brygg: 'Mild', type: 'Brown Ale', styrke: '4,7', beskrivelse: '' },
  { id: 64, name: 'Namdalsbryggeriet', brygg: 'Øyrtæv', type: 'djevle-øl', styrke: '10,4', beskrivelse: '' },
  { id: 70, name: 'Randhav bryggeri', brygg: 'Euxoa Annir Saison', type: 'Saison', styrke: '4,7', beskrivelse: '' },
  { id: 71, name: 'Randhav bryggeri', brygg: 'Tahiti Blonde', type: 'Blonde', styrke: '6', beskrivelse: '' },
  { id: 72, name: 'Randhav bryggeri', brygg: 'Orohena IPA', type: 'IPA', styrke: '6,5', beskrivelse: '' },
  { id: 73, name: 'Randhav bryggeri', brygg: 'Annir Saison', type: 'Saison', styrke: '6,5', beskrivelse: '' },
  { id: 80, name: 'Rena bryggeri', brygg: 'Birkebeiner', type: 'Pils', styrke: '4,7', beskrivelse: '' },
  { id: 81, name: 'Rena bryggeri', brygg: 'Baron', type: 'Hveteøl', styrke: '4,7', beskrivelse: '' },
  { id: 82, name: 'Rena bryggeri', brygg: 'Bajas', type: 'Bayer', styrke: '4,7', beskrivelse: '' },
  { id: 90, name: 'Røros bryggeri', brygg: 'Gottes Glück-Thamsøl', type: 'Pale Ale', styrke: '4,7', beskrivelse: '' },
  { id: 91, name: 'Røros bryggeri', brygg: 'Sabrura', type: 'Lys lager', styrke: '5,8', beskrivelse: ''},
  { id: 92, name: 'Røros bryggeri', brygg: 'IDA', type: 'Indian Dark Ale', styrke: '7,5', beskrivelse: '' },
  { id: 100, name: 'Stokkøy bryggeri', brygg: 'Pale Ale', type: 'Pale ale', styrke: '4,7', beskrivelse: '' },
  { id: 101, name: 'Stokkøy bryggeri', brygg: 'Kayak Wit', type: 'Belgisk wit', styrke: '4,7', beskrivelse: '' },
  { id: 102, name: 'Stokkøy bryggeri', brygg: 'Kaffeøl', type: 'Pale Ale m/kaffe', styrke: '4,7', beskrivelse: '' },
  { id: 103, name: 'Stokkøy bryggeri', brygg: 'Fosenøl', type: 'American Pale Ale', styrke: '4,7', beskrivelse: '' },
  { id: 104, name: 'Stokkøy bryggeri', brygg: 'Brown Ale', type: 'Brown ale', styrke: '5,5', beskrivelse: '' },
  { id: 105, name: 'Stokkøy bryggeri', brygg: 'Tindved Trippel', type: 'Belgisk trippel', styrke: '7,9', beskrivelse: '' },
  { id: 110, name: 'To tårn bryggeri', brygg: 'Gasse Gose', type: 'Gose - sour', styrke: '3,5', beskrivelse: '' },
  { id: 111, name: 'To tårn bryggeri', brygg: 'Cream Ale', type: 'Creame Ale', styrke: '4,5', beskrivelse: '' },
  { id: 112, name: 'To tårn bryggeri', brygg: 'Pale Ale', type: 'Pale Ale', styrke: '4,5', beskrivelse: '' },
  { id: 113, name: 'To tårn bryggeri', brygg: 'IPA', type: 'IPA', styrke: '6,0', beskrivelse: '' },
  { id: 114, name: 'To tårn bryggeri', brygg: 'Ørderøl', type: 'Smoked beer', styrke: '6,9', beskrivelse: '' },
  { id: 115, name: 'To tårn bryggeri', brygg: 'Skottgodt', type: 'Scottich Ale', styrke: '7,0', beskrivelse: '' },
  { id: 120, name: 'Valset gaardsbryggeri', brygg: 'Valset Pale', type: 'Pale ale', styrke: '5,5', beskrivelse: '' },
  { id: 121, name: 'Valset gaardsbryggeri', brygg: 'Indiaøl', type: 'IPA', styrke: '5,5', beskrivelse: '' },
  { id: 122, name: 'Valset gaardsbryggeri', brygg: 'Festival øl', type: 'White IPA', styrke: '5,5', beskrivelse: '' },
  { id: 123, name: 'Valset gaardsbryggeri', brygg: 'Valset Saison', type: 'Saison', styrke: '5,8', beskrivelse: '' },
  { id: 124, name: 'Valset gaardsbryggeri', brygg: 'Hvete bringebær', type: 'Hvete øl', styrke: '6', beskrivelse: '' },
  { id: 125, name: 'Valset gaardsbryggeri', brygg: 'Raus', type: 'Belgisk strong ale', styrke: '6,7', beskrivelse: '' }
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
