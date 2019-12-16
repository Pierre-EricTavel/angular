import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form2',
  templateUrl: './student-form2.component.html',
  styleUrls: ['./student-form2.component.css']
})
export class StudentForm2Component implements OnInit {
  
  validAgeValidator(control:FormControl):Object{
    const age= Number(control.value);
    if(age<0 || age>150){
      return {
        ageDomain: {
          parsedAge:age,
          min:0,
          max:150
        }
      }
    }
  }
  
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.minLength(2), Validators.required, Validators.pattern('[a-zA-Z1-9- ]+')]),
      age : new FormControl(0, [this.validAgeValidator]),
      email: new FormControl('')
    }

  );
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void{
    console.log(this.form.value);
  }
  resetValues(){
    this.form.setValue({name:'',age:0, email:''});
  }
  get name():any{
    return this.form.get('name');
  }
  get age():any{
    return this.form.get('age');
  }
  get email():any{
    return this.form.get('email');
  }
}
