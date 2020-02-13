import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,

    AppRoutingModule,

    // Material
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
