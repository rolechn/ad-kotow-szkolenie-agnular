import { Cat } from './model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      picUrl: ['puszek1.jpg','puszek2.jpg','puszek3.jpg'],
      vacinated : false,
      funFact: "Głośno mruczy",
      state: "wolny",
      adoption : false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: ['mruczek1.jpg','mruczek2.jpg','mruczek3.jpg'],
      vacinated : true,
      funFact: "Wspina się na zasłony",
      state: "wolny",
      adoption: false,
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: ['kiciek1.jpg', 'kiciek2.jpg','kiciek3.jpg'],
      vacinated : true,
      funFact : "Nie lubi truskawek",
      state : "wolny",
      adoption: false
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: ['klaczek1.jpg','klaczek2.jpg','klaczek3.jpg'],
      vacinated: true,
      funFact : "Lubi marchewkę",
      state : "wolny",
      adoption: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: ['pimpus1.jpg','pimpus2.jpg','pimpus3.jpg'],
      vacinated : true,
      funFact : "Dobrze dogaduje się z innymi zwierzętami",
      state : "wolny",
      adoption: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
