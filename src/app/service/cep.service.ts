import { Injectable } from '@angular/core';

import cep from 'cep-promise';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor() {}

  

  search(CepSearch: string): Promise<any> {
    return cep(CepSearch);
  }
}
