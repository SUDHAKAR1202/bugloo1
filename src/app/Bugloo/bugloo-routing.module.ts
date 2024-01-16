import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BuglooComponent } from './bugloo.component';
import { UserListComponent } from '../user-list/user-list.component';





const routes: Routes = [
    {
        path: '', component: BuglooComponent,
        children: [

            {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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