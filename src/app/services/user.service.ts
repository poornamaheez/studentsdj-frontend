import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any;
  jwtToken: any;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${environment.authUrl}/login/`, user);
  }


  register(user: User): Observable<any> {
    return this.http.post<any>(`${environment.authUrl}/register/`, user);
  }

  refresh(token: string): Observable<any>{
    return this.http.post<any>(`${environment.authUrl}/refresh/`, token);
  }

}
