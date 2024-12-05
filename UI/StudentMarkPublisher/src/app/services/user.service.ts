import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

  }
  userRegisterService(model:User): Observable<any>{
    return this.http.post("https://localhost:7069/api/User",model,{responseType: 'text' })
  }
  userLoginService(model:User):Observable<any>{
    return this.http.post("https://localhost:7069/api/User/Login",model,{responseType: 'text' })
  }
  markUplode(model:User):Observable<any>{
    return this.http.post("https://localhost:7069/api/User/MarkUplode",model,{responseType: 'text' })
  }
  GetAllMarksTeacher(): Observable<any> {
    return this.http.get("https://localhost:7069/api/User/GetAllMarksTeacher");
  }
  GetMarksParent(userName:string): Observable<any> {
    return this.http.get("https://localhost:7069/api/User/GetMarksParent?userName="+userName);
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7069/api/User/DeleteStudent/${id}`, { responseType: 'text' });
  }
  getAllParents(): Observable<any> {
    return this.http.get("https://localhost:7069/api/User/AllParents");
  }


}


