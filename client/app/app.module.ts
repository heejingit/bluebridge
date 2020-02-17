import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MaterialModule } from './material/material.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SidevarCardComponent } from './main-nav/sidevar/sidevar-card/sidevar-card.component';
import { UserButtonComponent } from './main-nav/sidevar/user-button/user-button.component';
import { AdminButtonComponent } from './main-nav/sidevar/admin-button/admin-button.component';
import { IndividualButtonComponent } from './main-nav/sidevar/individual-button/individual-button.component';
import { ToolbarComponent } from './main-nav/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { HomeInputComponent } from './home/home-input/home-input.component';
import { HomeFeedComponent } from './home/home-feed/home-feed.component';
import { SigninComponent } from './signin/signin.component';
import { LoginBoxComponent } from './signin/login-box/login-box.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './register/register.component';
import { RegisterBoxComponent } from './register/register-box/register-box.component';
import { StaffComponent } from './user-menus/staff/staff.component';
import { NewUserComponent } from './main-nav/sidevar/admin-button/new-user/new-user.component';
import { NoteComponent } from './main-nav/sidevar/user-button/note/note.component';
import { NoteHistoryComponent } from './main-nav/sidevar/user-button/note-history/note-history.component';
import { NoteInputComponent } from './main-nav/sidevar/user-button/note-input/note-input.component';
import { NoteDatepickerComponent } from './main-nav/sidevar/user-button/note-datepicker/note-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    SidevarCardComponent,
    UserButtonComponent,
    AdminButtonComponent,
    IndividualButtonComponent,
    HomeComponent,
    HomeInputComponent,
    HomeFeedComponent,
    ToolbarComponent,
    MainNavComponent,
    SigninComponent,
    LoginBoxComponent,
    RegisterComponent,
    RegisterBoxComponent,
    StaffComponent,
    NewUserComponent,
    NoteComponent,
    NoteHistoryComponent,
    NoteInputComponent,
    NoteDatepickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Material
    MaterialModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
