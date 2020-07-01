import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"users", component: UsersComponent},
  {path:"aboutus", component: AboutusComponent},
  {path:"contactus", component: ContactusComponent, children:[
    {path: "address", component: AddressComponent},
    {path: "phone", component:PhoneComponent}
  ]},
  {path: "students", component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
