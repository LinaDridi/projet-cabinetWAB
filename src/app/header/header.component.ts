import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private app:AppComponent) {
  }

  ngOnInit() {
  }
Admin(){
    this.app.EspaceAdmin=true;
    }
logout(){
      this.app.Adminn=false;
      localStorage.clear();
}
}
