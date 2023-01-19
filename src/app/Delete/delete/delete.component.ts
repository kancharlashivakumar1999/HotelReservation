import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private reg:RegService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data.Sno);
  }
  Yes()
  {
    this.reg.delete(this.data.Sno).subscribe();
    location.reload();
  }
  No()
  {
    location.reload();
  }
}
