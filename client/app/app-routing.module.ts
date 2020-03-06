import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WageOverviewComponent } from './components/wage/wage-overview/wage-overview.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { StaffComponent } from './components/user-menus/staff/staff.component';
import { NewUserComponent } from './components/main-nav/sidevar/admin-button/new-user/new-user.component';
import { NoteComponent } from './components/main-nav/sidevar/user-button/note/note.component';
import { CalendarComponent } from './components/main-nav/sidevar/user-button/calendar/calendar.component';
import { CalendarNewScheduleComponent } from './components/main-nav/sidevar/user-button/calendar/calendar-new-schedule/calendar-new-schedule.component';
import { PermissionDetailComponent } from './components/main-nav/sidevar/admin-button/permission/permission-detail/permission-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
    // canActivate: [AuthGuard]
  },
  // User accessible pages
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
    path: 'note',
    component: NoteComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'calendar-new',
    component: CalendarNewScheduleComponent
  },

  // Admin only accessible pages
  {
    path: 'wage-overview',
    component: WageOverviewComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'permission-detail',
    component: PermissionDetailComponent
  },
  {
    path: 'wage-overview',
    component: WageOverviewComponent
  },

  // Others
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
