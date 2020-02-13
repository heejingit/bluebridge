import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material/material.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { SidevarCardComponent } from './sidevar/sidevar-card/sidevar-card.component';
import { UserButtonComponent } from './sidevar/user-button/user-button.component';
import { AdminButtonComponent } from './sidevar/admin-button/admin-button.component';
import { IndividualButtonComponent } from './sidevar/individual-button/individual-button.component';
import { HomeComponent } from './home/home.component';
import { HomeInputComponent } from './home/home-input/home-input.component';
import { HomeFeedComponent } from './home/home-feed/home-feed.component';
import { ToolbarComponent } from './sidevar/toolbar/toolbar.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    // Material
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
