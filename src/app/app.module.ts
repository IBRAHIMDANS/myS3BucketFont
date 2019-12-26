import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_DIALOG_DATA,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { Error404Component } from './components/error404/error404.component';
import { ButtonModule, OverlayPanelModule } from 'primeng';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ToolbarComponent,
    Error404Component,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    ButtonModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
