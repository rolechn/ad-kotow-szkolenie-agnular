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
      picUrl: 'puszek1.jpg',
      vaccinated: true,
      description: 'Puszek nie lubi brudnej kuwety.'
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: 'mruczek1.jpg',
      vaccinated: false,
      description: 'Mruczek ma niezłe jazdy po kocimiętce.'
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: 'kiciek.jpg',
      vaccinated:true,
      description: 'Kiciek to najsympatyczniejszy kot pod słońcem!.'
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: 'klaczek.jpg',
      vaccinated: true,
      description: 'Kłaczek nie pozostawia po sobie żadnych kłaczków!'
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: 'pimpus.jpg',
      vaccinated: true,
      description: 'Pimpuś lubi czasem chodzić swoimi ścieżkami.'
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
