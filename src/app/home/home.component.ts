import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr :ToastrService) { 

    if(history.state.success==="OK"){this.showToastr();
      let p = history.state
      p.success = undefined
      history.replaceState(p,"")}
  }

  ngOnInit(): void {
  }
  showToastr(){
    this.toastr.success("Application submitted Successfully!")
  }
}
