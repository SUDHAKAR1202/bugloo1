import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BuglooComponent } from './bugloo.component';
import { UserListComponent } from '../users/user-list/user-list.component';
import { LoginComponent } from '../login/login.component';







const routes: Routes = [
    {
        path: '', component: BuglooComponent,
        children: [

            {path: '', redirectTo: 'login', pathMatch: 'full' },
            {path: 'login', component :LoginComponent},
            { path: 'dashboard', component: DashboardComponent },
            { path: 'list-users', component: UserListComponent },
          
          
           
         
           
            
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class BuglooRoutingModule { }