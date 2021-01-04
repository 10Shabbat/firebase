import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { AngularFireModule } from '@angular/fire';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './core/auth.guard';
import { UserResolver } from './user/user.resolver';
import { UserService } from './core/user.service';


import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
   
    
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
