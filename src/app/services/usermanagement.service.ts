import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  private apiurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiurl}/login`, { email, password });
  }

  userinfo(email:any): Observable<any>{
    return this.http.post(`${this.apiurl}/user`, {email})
  }
}
