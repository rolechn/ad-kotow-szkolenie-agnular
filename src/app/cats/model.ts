export interface Cat {
  name: string;
  ageMonths : number;
  breed: string;
  picUrl: string;
  characteristic?:CatCharacteristic
}

export interface AdoptionData {
  catsName: string;
  personName: string;
  personPhone: string;
}

export enum CatCharacteristic {
  LOWCA = 'LOWCA',
  DOMATOR = 'DOMATOR'
}
