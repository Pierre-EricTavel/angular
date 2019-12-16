import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { CowService } from '../services/cow.service';
import { DogService } from '../services/dog.service';


const DOGSERVICE:AnimalService = new DogService();

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css'],
  providers:[
    AnimalService,
      {provide:AnimalService,
        useValue: DOGSERVICE 
      }
  ]
})
export class FarmComponent implements OnInit {

  name:string;
  food:string;
  constructor(private animalService: AnimalService ) { }

  ngOnInit() {
    this.name= this.animalService.getName();
    this.food= this.animalService.getFood();
  }

}
