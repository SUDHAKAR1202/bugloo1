import { Component } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  title='List of Users';
  data: any;
  currentPg: any;
  searchText: any;
  users: any[] = [];
  filterName: string = '';
  filterEmail: string = '';
  searchTerm: string = '';

  constructor(private usersdata:UsersDataService ) {
    this.usersdata.getusers().subscribe((data)=> {
      console.warn('data',data);
      this.data = data;
    })
  }

  get filteredUsers(): any[] {
    return this.users.filter(user => {
      const nameMatch = user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const emailMatch = user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return nameMatch || emailMatch;
    });
  }



  

  }
