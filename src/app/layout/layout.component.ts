import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import { Layout } from './layout';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
/*
upload(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);
   }*/

   //object of layout
layout =new Layout ();


  constructor(private layoutservice:LayoutService) { }

  ngOnInit(): void {
  }
  
  //method to add layout
  addlayout(){
    this.layoutservice.addlayoutToDB(this.layout).subscribe
    (data=>{
      Swal.fire("data adeded sucessfully");
    }, error =>{
      Swal.fire("error");
    }
    )
  }

}
