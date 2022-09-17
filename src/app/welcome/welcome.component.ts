import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  search(){
    alert("Search is not avaliable.")
      }
  
      edit(){
     alert("Edit is not avaliable")     
      }

      delete(){
        alert("Delete is not avaliable")
      }

  constructor() { }

  ngOnInit(): void {
  }

}
