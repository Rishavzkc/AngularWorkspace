import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Layout } from './layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private  baseUrl="http://localhost:8097/layout/createlayout"
  constructor(private http: HttpClient) { }

  //method to connect with db
  addlayoutToDB(layout: Layout):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,layout);

  }
}
