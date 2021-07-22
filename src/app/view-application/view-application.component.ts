import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit{

  applications:any;
  url:string;

  constructor(private http:HttpClient) {
    this.url = "http://localhost:8080";
    
    let promise = new Promise<void>( (resolve,request)=>{
      this.http.get(this.url+"/application/all").toPromise().then(
        res => {
          resolve();
          this.applications = res;
        }
      )
    })
  }

  ngOnInit(): void {

  }

  printdata():void{
    console.log(this.applications);
  }
}
