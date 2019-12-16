import { Injectable} from '@angular/core';
import { Student } from './model/student';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  private students: Student[];

  private _currentStudent = new BehaviorSubject(new Student("",0));
  currentStudent= this._currentStudent.asObservable();
  currentStudentChange(student:Student){
     this._currentStudent.next(student);
   }



  constructor() {
    this.students = new Array<Student>();
    this.students.push(new Student("alpha", 25));
   }

 

   getStudents(): Student[]{
     return this.students;
   }
   saveStudent(student: Student): void{
     this.students.push(student);
   }
   getStudentById(id: number): Student{
     return this.students.find( s => s.id === id );
   }
   deleteStudent(id: number): void {
      const i = this.students.findIndex( s => s.id === id);
      this.students.splice(i, 1);
   }
   updateStudent(student: Student): void{
     console.log("updateStudent"+student);
    }
  }