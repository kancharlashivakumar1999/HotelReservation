import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  httpOption={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private Http:HttpClient) {

  }
  getdata()
  {
   return this.Http.get('https://localhost:44305/api/Hotel/get');
  }
  insert(Sno:any)
  {
    return this.Http.post('https://localhost:44305/api/Hotel/insert',Sno,this.httpOption).subscribe();
  }
  /*
  insert(data:any)
  {
   return this.Http.post('https://localhost:44305/api/Hotel/insert',data,this.httpOption).subscribe();
  }
  */
  delete(Sno:any)
   {
    return  this.Http.delete('https://localhost:44305/api/Hotel/delete/'+Sno);
   }
}
