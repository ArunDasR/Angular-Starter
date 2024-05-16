import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private router:Router, private route: ActivatedRoute) { }

  data : any= {
    employeeID: 0,
    name: '',
    age: null,
    department:'',
    address:'',
    phone:null
  }

  data1 : any = {
    EmployeeID : 0,
    Name : "Priya",
    Age : 30,
    Department : "IT",
    Address : "Priya 123",
    Phone : "9897564524"
  }

  id:any

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id > 0)
    {
      this.data1.employeeID = this.id;
    }
    this.empService.getEmployeesById(this.data1).subscribe((res)=>
    {
      console.log(res)
      this.data = res;
    })
  }

  onSubmit()
  {
    this.data1.Name = this.data.name
    this.data1.Age = this.data.age
    this.data1.Department = this.data.department
    this.data1.Address = this.data.address
    this.data1.Phone = this.data.phone.toString()

    this.empService.postEmployees(this.data1).subscribe((res=>
      {
        if(res.Status = "Success")
        {
          this.router.navigate(['/'])
        }
      }))
  }

}
