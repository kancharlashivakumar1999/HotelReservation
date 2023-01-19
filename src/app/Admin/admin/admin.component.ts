import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from 'src/app/Add/add/add.component';
import { DeleteComponent } from 'src/app/Delete/delete/delete.component';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  loginform!:any;


  constructor(private h:RegService, private _liveAnnouncer:LiveAnnouncer, private mat:MatDialog) { }


  columns:string[]=['Sno','Hotel','Arrival','Departure','Types','Guests','price','Manage']
  dataSource=new MatTableDataSource;

  @ViewChild(MatPaginator) paginator:MatPaginator|any;
  @ViewChild(MatSort) Sort:MatSort|any;
//  @ViewChild(MatMenuTrigger) Menu:MatMenuTrigger|any;

  MenuPosition={x:'0px', y:'0px'};

  ngOnInit(): void {
    this.get();
  }
 
//  onMenu(event:MouseEvent, element:Element)
//   {
//    event.preventDefault();
//     this.MenuPosition.x=event.clientX+'px';
//     this.MenuPosition.y=event.clientY+'px';
//     this.Menu.MenuData={'element':Element};
//     this.Menu.open();
//  }
  get()
  {
    return this.h.getdata().subscribe((x:any)=>{this.loginform= new MatTableDataSource(x);
    this.loginform.paginator=this.paginator; this.loginform.sort=this.Sort}
    );
  }
  ngAfterViewInit(): void {
    this.dataSource.sort=this.Sort;
    this.dataSource.paginator=this.paginator;
  }
  Delete(Sno:any)
  {
    this.mat.open(DeleteComponent,{width:'20%',height:'40%',data:Sno})
  }
  Edit(Sno:any)
  {
    this.mat.open(AddComponent, {width:'40%',height:'90%',data:Sno})

  }
  Add()
  {
    this.mat.open(AddComponent, {width:'40%',height:'90%'})
  }
  filter(e:any)
  {
    this.loginform.filter=e.target.value
  }
  AS(sortState:Sort)
  {
    if(sortState.direction)
    {
      this._liveAnnouncer.announce(`Sorted $(sortState.direction)ending`);
    }else{
      this._liveAnnouncer.announce(`Sorting cleared`);
    }
  }

}




