import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Password!:any;
  userName!:any;
  constructor(private move:Router) { }

  ngOnInit(): void {
  }
  login()
  {
    if(this.userName!=" " && this.Password!=" ")
    {
      if(this.userName=="Shiva@123" && this.Password=="Shiva123")
      {
          this.move.navigate(['admin'])
      }
    }
  

  }
  
}
