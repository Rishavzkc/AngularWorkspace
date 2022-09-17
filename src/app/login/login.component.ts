import { Component, OnInit } from '@angular/core';
import { Login } from './login';

import { LoginuserService } from './loginuser.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  //object for login
  login:Login =new Login();

forgot(){
  Swal.fire("This option is not avaliable. Right Now!")
}
  constructor(private loginuserservice:LoginuserService,private router: Router) { }

  ngOnInit(): void {
  }
  
  //method for login user
   userLogin(){
    console.log(this.login)
    this.loginuserservice.loginUser(this.login).subscribe(Logindata=>{
    
      console.log("Login Successfully")
      this.router.navigate(['/', 'dashboard']);
    }, error=>Swal.fire("Invalid User")
    );
    
  }

}