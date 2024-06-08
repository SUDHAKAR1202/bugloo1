import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  // CREATE 

  addUser(user:any): Observable<any> {
    return this.http.post<any>(this.url, user, httpOptions);

  }

  // READ 

  getusers() {
    return this.http.get(this.url)
  }
}
