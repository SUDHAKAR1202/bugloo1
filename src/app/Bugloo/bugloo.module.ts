import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuglooComponent } from './bugloo.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BuglooRoutingModule } from './bugloo-routing.module';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';





@NgModule({
  declarations: [
    BuglooComponent,
    SidemenuComponent,
    DashboardComponent,
   


  
  ],
  imports: [
    CommonModule,
    BuglooRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class BuglooModule { }
