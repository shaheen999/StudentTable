import { Component, Input } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
//import {currentStudentID} from '../student/studentlist';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent {
  sid='';
  sname='';
  sclass='';
  section='';
  srollNo='';
  fatherName='';
  sphonenumber='';
  susername='';
  @Input('currentStudentID') currentStudent  : string;
  constructor(private http: HttpClient,private router:Router, private sd: SharedDataService )
  { 
    let resultData= this.sd.getSharedValue();
    this.sid =resultData.sid;
        this.sname =resultData.sname;
        this.sclass =resultData.sclass;
        this.section =resultData.section;
        this.srollNo=resultData.srollNo;
        this.fatherName =resultData.fatherName;
        this.sphonenumber =resultData.sphonenumber;
        this.susername =resultData.susername;
    this.currentStudent  ="";
  }
  ngOnInit() {
    // this.sid= this.sd.getSharedValue().toString();
    console.log(this.sid);
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
   StudentArray : any[] = [];
  getAllStudent()
  {
    
    this.http.put("http://localhost:8080/getStudent"+ "/" + this.sid ,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        // this.getAllStudent();
        this.sid =resultData.sid;
        this.sname =resultData.sname;
        this.sclass =resultData.sclass;
        this.section =resultData.section;
        this.srollNo=resultData.srollNo;
        this.fatherName =resultData.fatherName;
        this.sphonenumber =resultData.sphonenumber;
        this.susername =resultData.susername;
       
    });
  }
  cancel(){
    this.router.navigate(['/studentlist']);
  }
  UpdateRecords()
  {
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
    
    this.http.put("http://localhost:8080/updateStudent"+ "/" + this.sid , bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
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
  
    this.router.navigate(['/studentlist']);
  }

}


















// import { Component, Input } from '@angular/core';
// import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Routes, RouterModule, Router } from '@angular/router';
// //import {currentStudentID} from '../student/studentlist';
// @Component({
//   selector: 'app-updatestudent',
//   templateUrl: './updatestudent.component.html',
//   styleUrls: ['./updatestudent.component.css']
// })
// export class UpdatestudentComponent {
//   sid='';
//   sname='';
//   sclass='';
//   section='';
//   srollNo='';
//   fatherName='';
//   sphonenumber='';
//   susername='';
//   @Input('currentStudentID') currentStudent  : string;
//   constructor(private http: HttpClient,private router:Router )
//   { this.currentStudent  ="";
//   }
//   ngOnInit() {
//   }
//   setsid(data:any)
//   {this.sid=data;}
//   setsname(data:any){this.sname=data;}
//   setsclass(data:any){this.sclass=data;}
//   setsrollNo(data:any){this.srollNo=data;}
//   setsection(data:any){this.section=data;}
//   setfatherName(data:any){this.fatherName=data;}
//   setsphonenumber(data:any){this.sphonenumber=data;}
//   setsusername(data:any){this.susername=data;}
//    StudentArray : any[] = [];
//   getAllStudent()
//   {
    
//     this.http.get("http://localhost:8080/getStudent").subscribe((resultData: any)=>
//     {
    
//         console.log(resultData);
//         this.StudentArray = resultData;
//     });
//   }
//   cancel(){
//     this.router.navigate(['/studentlist']);
//   }
//   UpdateRecords()
//   {
//     let bodyData = {
//       "sid":this.sid,
//       "sname" : this.sname ,
//       "sclass":this.sclass ,
//       "section":this.section,
//       "srollNo":this.srollNo,
//       "fatherName":this.fatherName,
//       "sphonenumber":this.sphonenumber,
//       "susername":this.susername
//     };
    
//     this.http.put("http://localhost:8080/updateStudent"+ "/" + this.sid , bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Student Registered Updateddd")
//         this.getAllStudent();
//         this.sid ="";
//         this.sname ="";
//         this.sclass ="";
//         this.section ="";
//         this.srollNo="";
//         this.fatherName ="";
//         this.sphonenumber ="";
//         this.susername ="";
       
//     });
  
//     this.router.navigate(['/studentlist']);
//   }

// }

