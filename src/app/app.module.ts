import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.services';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule, GuardsCheckEnd } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard }from './services/auth-Guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes =[
{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
{ path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
{ path: 'edit', canActivate:[AuthGuard], component: EditAppareilComponent},
{ path: 'auth', component: AuthComponent},
{ path: '', component: AppareilViewComponent},
{ path: 'not-found', component: FourOhFourComponent},
{ path: '**', redirectTo: 'not-found'},
]


@NgModule({
  declarations: [
    AppComponent,
    
    AppareilComponent,
    
    AuthComponent,
    
    AppareilViewComponent,
    
    SingleAppareilComponent,
    
    FourOhFourComponent,
    
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
