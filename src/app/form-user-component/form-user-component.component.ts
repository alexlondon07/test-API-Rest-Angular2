import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent implements OnInit {

  //Declaramos nuestras variable
  private userForm = { name: '', username: '', email: '', phone: ''}

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    alert('Test');
  }

}
