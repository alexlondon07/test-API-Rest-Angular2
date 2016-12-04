import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/validation.service';

@Component({
  selector: 'app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent implements OnInit {

//Declaramos nuestras variable
private userForm = { name: '', username: '', email: '', phone: ''}

userFormulario: any;
 constructor(private formBuilder: FormBuilder) {
   this.userFormulario = this.formBuilder.group({
     'name': ['', Validators.required],
     'username': ['', Validators.required],
     'email': ['', [ValidationService.emailValidator]],
     'phone': ['', [ValidationService.phoneValidator, Validators.minLength(6)]]
   });
  console.log(this.userForm);
 }

 saveUser() {
    if (this.userFormulario.dirty && this.userFormulario.valid) {
      alert(`Name: ${this.userFormulario.value.name} Email: ${this.userFormulario.value.email}`);
    }
  }

  ngOnInit() {
  }

  onSubmit(form: FormBuilder) {
    console.log(form);
  }

}
