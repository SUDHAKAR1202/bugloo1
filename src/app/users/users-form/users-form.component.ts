import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { ToastrService } from 'ngx-toastr';
import { data } from 'jquery';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  usersForm: FormGroup;
  projectcode: any;
  projectData: any = [];
  listofCompanies: any;
  isSubmitted: boolean = false;
  title = "Add";
  isEdit: boolean = false;
  isView: boolean = false;
  validProjectCode: any;

  constructor(public dataService: UsersDataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {

    this.usersForm = this.fb.group({
      projectcode: ['', Validators.required],
      companycode: ['', Validators.required],
      projectname: ['', Validators.required],
      companyid: ['', Validators.required],
      startdate: [''],
      enddate: [''],
      status: ['', Validators.required],
      description: ['']
     
    
      
    });

  

}
 ngOnInit(): void {
   
  
    }
    

}

