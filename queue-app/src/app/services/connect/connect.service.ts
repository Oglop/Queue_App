import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Connect } from 'src/app/interfaces/connect';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  
  connectUri: string = `${environment.connectUri}/connect`
  constructor(private httpClient: HttpClient) { }

  connectToApi(email: string){
    const connect: Connect = { 
      clientId: environment.clientId, 
      clientSecret: environment.clientSecret, 
      email: email
    }
    return this.httpClient.post(this.connectUri, connect)
  }
}
