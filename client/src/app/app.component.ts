import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SignalRService } from './services/signal-r.service';
import * as signalR from '@aspnet/signalr';
  import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-client';

  constructor(private messageService: MessageService, public signalService: SignalRService,
     private http: HttpClient) { }

  ngOnInit(): void {

    this.signalService.startConnection();
  }
}
