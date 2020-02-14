import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';


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
