import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitService{
  url:string = "http://localhost:8080";
  constructor(private http : HttpClient) { }

  register(userData:{[id:string]:string}){
    return this.http.post<any>(this.url+"/application",userData);
  }
}
