import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl="http://localhost:8080/login/loginUser"
  constructor(private http: HttpClient) { }

  //method for calling http request
  loginUser(login: Login):Observable<Object>{
    
    return this.http.post(`${this.baseUrl}`,login);
  }
}