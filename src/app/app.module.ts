import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from '@ngx-toolkit/cookie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { MenuComponent } from './components/menu/menu.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { TokenInterceptor } from './services/token-interceptor/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DoctorsComponent,
    PatientsComponent,
    MedicinesComponent,
    PrescriptionsComponent,
    ProfileComponent,
    HomeComponent,
    SearchBarComponent,
    LoginComponent,
    SignupComponent,
    ToolbarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    CookieModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
