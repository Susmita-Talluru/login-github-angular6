import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// MATERIAL DESIGN

import {
  MatButtonModule,
  MatTableModule,
  MatCardModule, MatCheckboxModule, MatIconModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {IconComponent} from './components/utils/icon/icon.component';
import {ApiService} from './services/api.service';
import {AuthService} from './services/auth.service';
import {ListRepoComponent} from './components/pages/list-repo/list-repo.component';
import {AuthGuard} from './guards/auth.guard';
import {TokenInterceptor} from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IconComponent,
    ListRepoComponent
  ],
  imports: [
    BrowserAnimationsModule, MatTableModule,
    HttpClientModule, MatSnackBarModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule, MatCardModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatCardModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
