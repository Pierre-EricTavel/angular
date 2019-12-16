import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataManagementService } from '../data-management.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  @Output()
  currentStudentEvent = new EventEmitter<Student>();

  constructor(private mananagementService: DataManagementService ) { }

  ngOnInit() {
  }

  getStudents(): Student[] {
    return this.mananagementService.getStudents();
  }
  editStudent(id:number):void{
    this.mananagementService.currentStudentChange(this.mananagementService.getStudentById(id));

  }
  deleteStudent(id:number):void{
    this.mananagementService.deleteStudent(id);
  }
  
 
}
