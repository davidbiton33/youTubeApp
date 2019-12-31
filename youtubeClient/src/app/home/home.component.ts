import { Component, OnInit } from '@angular/core';
import { DALService } from '../dal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Dal:DALService) { }
  addNewBtn = false;

  addNew(){
    this.addNewBtn = !this.addNewBtn;
  }
  sendToServer(id,key,title){
    this.Dal.addNewMovie(id,key,title)
  }
  ngOnInit() {
  }

}
