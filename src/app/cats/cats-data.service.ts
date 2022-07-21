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
      picUrl: ['puszek1.jpg'],
      vaccination: true,
      funfact: 'Maine Coons are often referred to as a canine cat. They become attached to a person and can walk along the leg like a barking confrere.',
      reserved: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: ['mruczek1.jpg'],
      vaccination: false,
      funfact: 'British cats are one of the largest domestic cats. Their build is extremely muscular, and their fluffy hair adds volume to them.',
      reserved: false
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: ['kiciek.jpg', 'kiciek2.jpg', 'kiciek3.jpg'],
      vaccination: false,
      funfact: 'Persian cats are rather stocky and weigh much more than common breeds. The body weight of Persians, as a rule, does not exceed six kilograms.',
      reserved: false 
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: ['klaczek.jpg'],
      vaccination: true,
      funfact: 'British cats are one of the largest domestic cats. Their build is extremely muscular, and their fluffy hair adds volume to them.',
      reserved: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: ['pimpus.jpg'],
      vaccination: true,
      funfact: 'Dachowce are cats that do not have a thoroughbred pedigree, which means that they are the feline equivalent of mongrels.',
      reserved: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }


  



}
