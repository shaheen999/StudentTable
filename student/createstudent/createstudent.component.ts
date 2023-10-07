import { Component } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
  sid: string =" ";
  sname: string =" ";
  sclass: string =" ";
  section: string =" ";
  srollNo: string =" ";
  fatherName: string =" ";
  sphonenumber: string =" ";
  susername: string =" ";
  currentStudentID = " ";
  constructor(private http: HttpClient,private router:Router )
  {
    
  }
  setsid(data:any)
  {this.sid=data;}
  setsname(data:any){this.sname=data;}
  setsclass(data:any){this.sclass=data;}
  setsrollNo(data:any){this.srollNo=data;}
  setsection(data:any){this.section=data;}
  setfatherName(data:any){this.fatherName=data;}
  setsphonenumber(data:any){this.sphonenumber=data;}
  setsusername(data:any){this.susername=data;}
  cancel(){
    this.router.navigate(['/studentlist']);
  }
  register()
  {
    if(this.sid==null  ){alert("enter sid");}
    else{                    
    let bodyData = {
      "sid":this.sid,
      "sname" : this.sname ,
      "sclass":this.sclass ,
      "section":this.section,
      "srollNo":this.srollNo,
      "fatherName":this.fatherName,
      "sphonenumber":this.sphonenumber,
      "susername":this.susername
    };
 
    this.http.post("http://localhost:8080/addData",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.sid =" ";
        this.sname =" ";
        this.sclass =" ";
        this.section =" ";
        this.srollNo=" ";
        this.fatherName =" ";
        this.sphonenumber =" ";
        this.susername =" ";
       
    });
    alert("Student Registered Successfully");
    this.router.navigate(['/studentlist']);
   }
  }
  
}
