import { Component } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { AbstractControl, ValidationErrors } from '@angular/forms'; 
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  StudentArray : any[] = [];
  sid: string ="";
  sname: string ="";
  sclass: string ="";
  section: string ="";
  srollNo: string ="";
  fatherName: string ="";
  sphonenumber: string ="";
  susername: string ="";
  //currentStudentID = "";
  constructor(private http: HttpClient,private router:Router, private sharedDataService:SharedDataService )//create object of service class
  {
    this.getAllStudent();
  }
  // form=new FormGroup({
  //   sid: new FormControl('',[Validators.required,sidvalidator.cannotContainSpace])
  // });
  setsid(data:any)
  { 
    this.sid=data;
    }
  setsname(data:any){this.sname=data;}
  setsclass(data:any){this.sclass=data;}
  setsrollNo(data:any){this.srollNo=data;}
  setsection(data:any){this.section=data;}
  setfatherName(data:any){this.fatherName=data;}
  setsphonenumber(data:any){this.sphonenumber=data;}
  setsusername(data:any){this.susername=data;}
  
  getAllStudent()
  {
    
    this.http.get("http://localhost:8080/getStudent").subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
  ngOnInit() {
  }
  loginpage()
  {
    this.router.navigate(['/login']);
  }
  addStudent()
  {
    this.router.navigate(['/addStudent']);
  } 
  setUpdate(data : any)
  {
    this.sharedDataService.setSharedValue(data);
    this.router.navigate(['/updatestudent']);
  }
  setDelete(data : any)
  {
    alert("delete");
    this.http.delete("http://localhost:8080/deleteStudent"+ "/"+ data.sid,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllStudent();
        this.sid ="";
        this.sname ="";
        this.sclass ="";
        this.section ="";
        this.srollNo="";
        this.fatherName ="";
        this.sphonenumber ="";
        this.susername ="";
       
  
    });
  }
}
  // register()
  // {
  //   if(this.sid==null){alert("enter sid");}
  //   else{
  //   let bodyData = {
  //     "sid":this.sid,
  //     "sname" : this.sname ,
  //     "sclass":this.sclass ,
  //     "section":this.section,
  //     "srollNo":this.srollNo,
  //     "fatherName":this.fatherName,
  //     "sphonenumber":this.sphonenumber,
  //     "susername":this.susername
  //   };
  //   this.http.post("http://localhost:8080/addData",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Registered Successfully");
  //       this.getAllStudent();
  //       this.sid =" ";
  //       this.sname =" ";
  //       this.sclass =" ";
  //       this.section =" ";
  //       this.srollNo=" ";
  //       this.fatherName =" ";
  //       this.sphonenumber =" ";
  //       this.susername =" ";
       
  //   });} 
  // } 
  // setUpdate(data : any)
  // {
  //   this.router.navigate(['/updatestudent']);
    // alert(this.currentStudentID);
    // alert("update");
    // this.sid =data.sid;
    // this.sname =data.sname;
    // this.sclass =data.sclass;
    // this.section =data.section;
    // this.srollNo=data.srollNo;
    // this.fatherName =data.fatherName;
    // this.sphonenumber =data.sphonenumber;
    // this.susername =data.susername;
    // this.currentStudentID = data.sid;
    // this.UpdateRecords();
  // }
  // UpdateRecords()
  // {
  //   let bodyData = {
  //     "sname" : this.sname ,
  //     "sclass":this.sclass ,
  //     "section":this.section,
  //     "srollNo":this.srollNo,
  //     "fatherName":this.fatherName,
  //     "sphonenumber":this.sphonenumber,
  //     "susername":this.susername
  //   };
    
  //   this.http.put("http://localhost:8080/updateStudent"+ "/" + this.currentStudentID , bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Registered Updateddd")
  //       this.getAllStudent();
  //       this.sid ="";
  //       this.sname ="";
  //       this.sclass ="";
  //       this.section ="";
  //       this.srollNo="";
  //       this.fatherName ="";
  //       this.sphonenumber ="";
  //       this.susername ="";
       
  //   });
  // }
 
  // save()
  // {
  //   if(this.currentStudentID == '')
  //   {
  //       this.register();
  //   }
  //     else
  //     {
  //      this.UpdateRecords();
  //     }
  // }

