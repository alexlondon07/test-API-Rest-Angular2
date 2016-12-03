import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from '../http.service';
import {  Response } from '@angular/http';


@Component({
  selector: 'app-api-users-component',
  templateUrl: './user-table.template.html',
  styleUrls: ['./api-users-component.component.css']
})
export class ApiUsersComponentComponent implements OnInit {
  private users: Array<Object>;

  constructor(private http: HttpService) { }

  ngOnInit() {
    //Realizamos el llamado a la API
     this.http.getUsers().subscribe(
        (dataUsers: any) => (this.users = dataUsers),
         error => console.log(error)
     );
  }
}
