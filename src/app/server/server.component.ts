import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',    //this is what we put in app.component to call this whole component
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number = 10;
  serverStatus:string = "offline"

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() { }

  ngOnInit() {
  }

}
