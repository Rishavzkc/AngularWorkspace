import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard';
import { DashboardService } from './dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

//method for search
    search(){
    Swal.fire("Search is not avaliable.")
      }
 
//method for edit
    edit(){
      Swal.fire("Edit is not avaliable")     
      }

 //method for delete    
      delete(){
        Swal.fire("Delete is not avaliable")
       }

  //object of dashbord
      dashboard:Dashboard[] =[];
      data:any;

     constructor(private service:DashboardService) { }

      ngOnInit(): void 
      
  //call method from service class 
  {   
  this.service.getLayout()
  .subscribe(response => {
    this.data = response;
  });
}
}