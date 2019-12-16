import { Component, OnInit } from '@angular/core';
import { FormControl  } from '@angular/forms';
import {Student} from '../model/student';
import { DataManagementService } from '../data-management.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  message: string;

  id: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  age: FormControl = new FormControl(0);

  private _currentStudent: Student;

  constructor(private dataManagement: DataManagementService) {

  }

  ngOnInit() {
    this.dataManagement.currentStudent.subscribe(student => {
      this._currentStudent = student;
      this.name.setValue(this._currentStudent.name);
      this.age.setValue(this._currentStudent.age);
      this.id.setValue(this._currentStudent.id);
    });
  }

  add() {
    const student: Student = new Student(this.name.value, this.age.value);
    this.dataManagement.saveStudent(student);
    this.message = student + ' has been added';
    this.name.setValue('');
    this.age.setValue(0);
  }
  update() {
    const student: Student = this.dataManagement.getStudentById(this.id.value);
    student.name = this.name.value;
    student.age = this.age.value;
    this.message = student + ' has been changed';
    this.name.setValue('');
    this.age.setValue(0);
  }
}
