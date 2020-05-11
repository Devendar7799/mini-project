import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  countryURL = 'https://reqres.in/api/users?page=1';
  constructor(private http: HttpClient) { }



  _getDetails() {
    return this.http.get(this.countryURL);

  }

}
