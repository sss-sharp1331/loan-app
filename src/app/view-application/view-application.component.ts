import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { RetrieveService } from '../services/retrieve.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit{

  applications:any;
  constructor(private http:HttpClient,private rs : RetrieveService) {
      this.rs.getAllApplications().subscribe(
        response => this.applications = response,
        error=> console.error("Failed to retrieve data! Error: "+error)
      )
  }

  ngOnInit(): void {

  }

  printdata():void{
    console.log(this.applications);
  }
}
