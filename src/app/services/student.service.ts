import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  token: any;
  jwtToken: any;

  constructor(private http: HttpClient) { }


  private getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.baseUrl}/students/`, {headers: this.getHeaders()});
  } 

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${environment.baseUrl}/students/${id}/`, {headers: this.getHeaders()});
  }

  saveStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${environment.baseUrl}/students/`, student, {headers: this.getHeaders()});
  }

  updateStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(`${environment.baseUrl}/students/${student.student_key}/`, student, {headers: this.getHeaders()});
  }

  deleteStudent(id: number): Observable<void>{
    return this.http.delete<void>(`${environment.baseUrl}/students/${id}/`, {headers: this.getHeaders()});
  }

  patchStudent(student: Student): Observable<Student>{
    return this.http.patch<Student>(`${environment.baseUrl}/students/`, {headers: this.getHeaders()})
  }

}
