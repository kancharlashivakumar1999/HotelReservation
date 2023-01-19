import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  loginform!:any;
  constructor(private reg:RegService,@Inject(MAT_DIALOG_DATA) public data:any,private mat:MatDialog) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      Sno:new FormControl(''),
      Hotel:new FormControl(''),
      Arrival:new FormControl(''),
      Departure:new FormControl(''),
      Types:new FormControl(''),
      Guests:new FormControl(''),
      price:new FormControl(''),
    });
    let A=this.data.Arrival.split('T');
    let D=this.data.Departure.split('T');
    this.loginform.patchValue({
      Sno:this.data.Sno,
      Hotel:this.data.Hotel,
      Arrival:A[0],
      Departure:D[0],
      Types:this.data.Types,
      Guests:this.data.Guests,
      price:this.data.price
    });
  }
 
  x()
  {
    this.mat.closeAll()
  }
  save()
  {
    let shiva=JSON.stringify(this.loginform.value);
    console.log(this.loginform.value);
    this.reg.insert(shiva);
    location.reload();

  }
  clear()
  {
    this.loginform.reset();
  }
}
