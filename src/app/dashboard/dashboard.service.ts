import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private  baseUrl="http://localhost:8095/dashboard/layouts"
  constructor( private httpClient: HttpClient) { }

  //method to get http request
  getLayout(){
    return this.httpClient.get(this.baseUrl);
  }
}