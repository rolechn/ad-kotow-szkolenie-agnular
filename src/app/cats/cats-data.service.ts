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
      picUrl: ['puszek1.jpg', 'cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
      vaccinated: false,
      description: "Lubię ganiać myszy.",
      isHovering: false,
      reserved: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: ['mruczek1.jpg', 'cat4.jpg', 'cat5.jpg', 'cat6.jpg'],
      vaccinated: true,
      description: "Zwykle śpię całe dnie.",
      isHovering: false,
      reserved: true
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: ['kiciek.jpg', 'cat7.jpg', 'cat8.jpg', 'cat9.jpg'],
      vaccinated: false,
      description: "Lepiej nie podchodź.",
      isHovering: false,
      reserved: true
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: ['klaczek.jpg', 'cat10.jpg', 'cat11.jpg', 'cat12.jpg'],
      vaccinated: true,
      description: "Jestem puszysty.",
      isHovering: false,
      reserved: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: ['pimpus.jpg', 'cat13.jpg', 'cat14.jpg', 'cat15.jpg'],
      vaccinated: false,
      description: "Nie wiem co mogę powiedzieć o sobie.",
      isHovering: false,
      reserved: true
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
