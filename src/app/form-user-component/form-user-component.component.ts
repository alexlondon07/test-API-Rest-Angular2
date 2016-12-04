import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/validation.service';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent implements OnInit {

//Declaramos nuestras variable
private userForm = { name: '', username: '', email: '', phone: ''}
responseStatus:Object= [];
status:boolean;

userFormulario: any;
 constructor(private formBuilder: FormBuilder, private http: HttpService) {
   this.userFormulario = this.formBuilder.group({
     'name': ['', Validators.required],
     'username': ['', Validators.required],
     'email': ['', [ValidationService.emailValidator]],
     'phone': ['', [ValidationService.phoneValidator, Validators.minLength(6)]]
   });
  console.log(this.userForm);
 }

 /**
  * Funcion para ingresar Usuario a la API
  * [saveUser description]
  * @return {[type]} [description]
  */
 saveUser() {
    //Mando el array con los parametros
    let userDataForm = {
      name: this.userFormulario.value.name,
      username: this.userFormulario.value.username,
      email: this.userFormulario.value.email,
      phone: this.userFormulario.value.phone
    };
    if (this.userFormulario.dirty && this.userFormulario.valid) {
      //alert(`Name: ${this.userFormulario.value.name} Email: ${this.userFormulario.value.email}`);
        console.log(this.userFormulario);
        return this.http.postUsers(userDataForm).subscribe(
           data => console.log(this.responseStatus = data),
           err => console.log(err),
           () => console.log('Request User Completed')
        );
    }
  }

  ngOnInit() {
  }

}
