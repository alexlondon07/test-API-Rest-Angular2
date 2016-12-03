import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
  export class HttpService{
      //Declaramos las variables
      private baseURL: string = 'https://jsonplaceholder.typicode.com';
      private userData: string = '';

      //Definimos nuestro contructor
      constructor(private http: Http){
      }

    //Response de user
    // {
    //   "id": 2,
    //   "name": "Ervin Howell",
    //   "username": "Antonette",
    //   "email": "Shanna@melissa.tv",
    //   "address": {
    //     "street": "Victor Plains",
    //     "suite": "Suite 879",
    //     "city": "Wisokyburgh",
    //     "zipcode": "90566-7771",
    //     "geo": {
    //       "lat": "-43.9509",
    //       "lng": "-34.4618"
    //     }
    //   },
    //   "phone": "010-692-6593 x09125",
    //   "website": "anastasia.net",
    //   "company": {
    //     "name": "Deckow-Crist",
    //     "catchPhrase": "Proactive didactic contingency",
    //     "bs": "synergize scalable supply-chains"
    //   }
    //Get users
    getUsers(){
      return this.http.get(this.baseURL + '/users', { headers: this.getHeaders() } ).map((res:Response) => res.json());
    }

    //Post Users
    postUsers(){
      return this.http.post(this.baseURL + '/users', { headers: this.getHeaders() } ).map((res:Response) => res.json());
    }

    //Funcion para obtener la cabezera, en caso que tengamos que enviaron parametros adicionales
    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
  }
