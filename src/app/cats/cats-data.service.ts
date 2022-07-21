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
      picUrl: ['puszek1.jpg', 'puszek2.jpg', 'puszek3.jpg', 'puszek4.jpg'],
      vaccinated: true,
      description: 'Puszek nie lubi brudnej kuwety.',
      reservation: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: ['mruczek1.jpg', 'mruczek2.jpg', 'mruczek3.jpg', 'mruczek4.jpg'],
      vaccinated: false,
      description: 'Mruczek ma niezłe jazdy po kocimiętce.',
      reservation: false
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: ['kiciek.jpg', 'kiciek2.jpg', 'kiciek3.jpg', 'kiciek4.jpg'],
      vaccinated:true,
      description: 'Kiciek to najsympatyczniejszy kot pod słońcem!.',
      reservation: false
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: ['klaczek.jpg', 'kłaczek2.jpg', 'kłaczek3.jpg', 'kłaczek4.jpg'],
      vaccinated: true,
      description: 'Kłaczek nie pozostawia po sobie żadnych kłaczków!',
      reservation: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: ['pimpus.jpg', 'pimpus2.jpg', 'pimpus3.jpg', 'pimpus4.jpg'],
      vaccinated: true,
      description: 'Pimpuś lubi czasem chodzić swoimi ścieżkami.',
      reservation: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }

  checkVaccination(vaccinated: boolean): string {
    if (vaccinated)
      return "&#10003";
    else
      return "&#10060";
  }
}
