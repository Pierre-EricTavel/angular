import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'IRU First Application';
  headerComponent: HeaderComponent;
  currentStudent : Student;
  
  event: string;
  broadcast(event: string){
    this.event = event;
  }
}
