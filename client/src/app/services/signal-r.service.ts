import { Injectable } from '@angular/core';
import { ChartModel } from '../ChartModel';
import * as signalR from '@aspnet/signalr';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: ChartModel[];
  private hubConnection: signalR.HubConnection

  constructor(private messageService: MessageService) { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('http://localhost:5001/notify')
                            .build();
 
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

    this.hubConnection.on("BroadcastMessage", (type: string, payload: string) => {
      this.messageService.add({ severity: type, summary: payload, detail: 'Via SignalR' });
    });  
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
}
