import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

// Material
import { MaterialModule } from './material/material.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SidevarCardComponent } from './components/main-nav/sidevar/sidevar-card/sidevar-card.component';
import { UserButtonComponent } from './components/main-nav/sidevar/user-button/user-button.component';
import { AdminButtonComponent } from './components/main-nav/sidevar/admin-button/admin-button.component';
import { IndividualButtonComponent } from './components/main-nav/sidevar/individual-button/individual-button.component';
import { ToolbarComponent } from './components/main-nav/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeInputComponent } from './components/home/home-input/home-input.component';
import { HomeFeedComponent } from './components/home/home-feed/home-feed.component';
import { WageOverviewComponent } from './components/wage/wage-overview/wage-overview.component';
import { ChartComponent } from './components/wage/wage-overview/chart/chart.component';
import { OverviewComponent } from './components/wage/wage-overview/overview/overview.component';
import { SearchComponent } from './components/wage/wage-overview/search/search.component';
import { DetailComponent } from './components/wage/wage-overview/detail/detail.component';
import { HistoryComponent } from './components/wage/wage-overview/detail/history/history.component';
import { TotalWageComponent } from './components/wage/wage-overview/detail/total-wage/total-wage.component';

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
    WageOverviewComponent,
    ChartComponent,
    OverviewComponent,
    SearchComponent,
    DetailComponent,
    HistoryComponent,
    TotalWageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    ChartsModule,
    ReactiveFormsModule,

    AppRoutingModule,

    // Material
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
