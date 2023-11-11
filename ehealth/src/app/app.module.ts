import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TestsComponent } from './tests/tests.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonUpComponent } from './button-up/button-up.component';
import { ButtonDownComponent } from './button-down/button-down.component';
import { ButtonDarkLightModeComponent } from './button-dark-light-mode/button-dark-light-mode.component';
import { ThemeService } from './theme.service';
import { ButtonHelpComponent } from './button-help/button-help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { PharmacyInventoryComponent } from './pharmacy-inventory/pharmacy-inventory.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'inventory', component: PharmacyInventoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AppointmentsComponent,
    TestsComponent,
    CarouselComponent,
    FooterComponent,
    ButtonUpComponent,
    ButtonDownComponent,
    ButtonDarkLightModeComponent,
    ButtonHelpComponent,
    HelpDialogComponent,
    PharmacyInventoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    FlexLayoutModule,
    NgxGoogleAnalyticsModule.forRoot('Your Google Analytics tracking ID'),
    NgxGoogleAnalyticsRouterModule,
    FormsModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
