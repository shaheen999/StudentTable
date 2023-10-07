import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './student/login/login.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';

const routes: Routes = [{path:'login', component:LoginComponent},
                {path:'studentlist', component:StudentlistComponent},
                {path:'updatestudent', component:UpdatestudentComponent},
                {path:'addStudent',component:CreatestudentComponent},
                {path:'',   redirectTo: '/studentlist', pathMatch: 'full' },
                {path:'**', redirectTo:'/login'},]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
