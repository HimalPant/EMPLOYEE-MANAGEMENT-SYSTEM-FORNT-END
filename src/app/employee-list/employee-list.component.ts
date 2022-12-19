import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor() { }

  ngOnInit(): void {
    this.employees=[{
      "id": 1,
    "firstName": "Himal",
    "lastName": "Pant",
    "emailId": "himal@gmail.com",
    "empAge":24,
    "working": true
    },{
      "id": 1,
    "firstName": "Krishna",
    "lastName": "Pant",
    "emailId": "Krishna@gmail.com",
    "empAge":27,
    "working": true
    }]
  }

}
