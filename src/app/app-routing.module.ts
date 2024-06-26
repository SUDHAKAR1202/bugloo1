import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path: '' , component:AppComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component:LoginComponent},
     

      {path: 'bugloo', loadChildren: () => import('./Bugloo/bugloo.module').then(module => module.BuglooModule)},
    ],
  },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,CommonModule],
  exports: [RouterModule,BrowserModule]
})
export class AppRoutingModule { }
