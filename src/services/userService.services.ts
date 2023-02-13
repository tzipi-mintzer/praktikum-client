import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/User`;
  addUser(user: User) {
    return this.http.post<User>(`${this.routeUrl}`, user);

  }
  getById(id: number = 1001) {
    return this.http.get<User>(`${this.routeUrl}/GetUserById/${id}`);
  }
}