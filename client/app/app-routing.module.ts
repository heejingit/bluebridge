import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WageOverviewComponent } from './components/wage/wage-overview/wage-overview.component';



const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'wage-overview', 
    component: WageOverviewComponent
  },
  // {
  //   path: 'customers',
  //   loadChildren: './customers/customers.module#CustomersModule'
  // },
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
