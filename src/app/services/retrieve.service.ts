import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {
  url:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllApplications(){
    return this.http.get<any>(this.url+"/application/all")
  }

  getSingleApplication(id:string){
    return this.http.get<any>(this.url+"/application/id/"+id);
  }

}
