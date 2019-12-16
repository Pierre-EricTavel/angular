import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class DogService extends AnimalService{
  
  name = 'Dog';
  food = 'Meat';

}
