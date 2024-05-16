import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeServiceService, private router:Router) { }

  emp : any = {
    EmployeeID : 0,
    Name : "",
    Age : 30,
    Department : "",
    Address : "",
    Phone : ""
  }
  empData:any= []
  ngOnInit(): void {
    this.empService.getEmployees().subscribe((res:any)=>
    {
      this.empData = res
    })
  }

  addButtonClick()
  {
    this.router.navigate(['/create']);
  }

  onClickEdit(id:any)
  {
    this.router.navigate([`/create/${id}`]);
      console.log({id})
  }

  onClickDelete(id:any)
  {
    this.emp.EmployeeID = id;
    console.log(id);
    this.empService.deleteEmployee(this.emp).subscribe((res=>
      {
        if(res.Status = "Success")
        {
          this.ngOnInit();
        }
      }))
  }
}
