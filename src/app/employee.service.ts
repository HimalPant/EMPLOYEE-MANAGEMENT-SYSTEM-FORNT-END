import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/emps";
  private baseUrl1 = "http://localhost:8080/api/v1/create/emps";
  private baseUrl2 = "http://localhost:8080/api/v1/emp";
  private baseUrl3 = "http://localhost:8080/api/v1/update/emp";
  private baseUrl4 = "http://localhost:8080/api/v1/delete/emp";


  constructor(private httpClient: HttpClient) { }
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, employee)
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl2}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`, employee);
  }

  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl4}/${id}`);
  }
}
