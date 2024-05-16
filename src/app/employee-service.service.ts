import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getEmployees()
  {
    return this.http.get<any>('Employee/GetEmployees')
  }

  postEmployees(data:any)
  {
    return this.http.post<any>('Employee/AddUpdateEmployee',data);
  }

  getEmployeesById(data:any)
  {
    return this.http.post<any>('Employee/GetEmployeesById',data);
  }

  deleteEmployee(data:any)
  {
    return this.http.post<any>('Employee/DeleteEmployee',data);
  }

}
