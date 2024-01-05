import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import cep,{ CEP } from 'cep-promise';
import { CepService } from './service/cep.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cep-app';

  address: any = {};

  constructor(private cepService: CepService) {}

  async search(cepSearch: string):Promise<void> {
    
    try{
      const cepRespose: CEP = await this.cepService.search(cepSearch);
      this.address = cepRespose;

     

    }catch (errors){
      alert('CEP não encontrado');
    }
    
    
    
    
  }
}
