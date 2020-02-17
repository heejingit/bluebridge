import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './user-menus/staff/staff.component';
import { NewUserComponent } from './main-nav/sidevar/admin-button/new-user/new-user.component';
import { NoteComponent } from './main-nav/sidevar/user-button/note/note.component';
import { CalendarComponent } from './main-nav/sidevar/user-button/calendar/calendar.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'note',
    component: NoteComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  
  // {
  //   path: 'orders',
  //   loadChildren: './orders/orders.module#OrdersModule'
  // },
  // {
  //   path: 'messages',
  //   loadChildren: './messages/messages.module#MessagesModule'
  // },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
