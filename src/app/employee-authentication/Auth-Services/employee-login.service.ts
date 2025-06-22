import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '../../../endpoint/endpoint';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { login } from '../Authentication-Model/employeeLogin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {

  constructor(private http:HttpClient) { }

  auth_URL = endpoint.auth
  private userLogin : BehaviorSubject<login|null> = new BehaviorSubject<login|null> (null);
  public user : Observable<login|null>  =this.userLogin.asObservable();


  public loginData(login:login): Observable<login>
  {
    return this.http.post<login>(`${this.auth_URL}/Login`,login).pipe(
      map((user:any)=>{
          localStorage.setItem("Login",JSON.stringify(user));
          this.userLogin.next(user);
          return user
      })
    )
  }
  public getUserLoginData():login|null
  {
    return this.userLogin.value;
  }

  public logout()
  {
    localStorage.removeItem("Login");
    this.userLogin.next(null);
  }
}
