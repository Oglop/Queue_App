import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandResponse } from 'src/app/interfaces/command-response';
import { Room } from 'src/app/interfaces/room';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  readUri: string = `${environment.readUri}/rooms`
  writeUri: string = `${environment.writeUri}/rooms`
  rooms: Room[] = []

  constructor(private httpClient: HttpClient) { }

  getRoomById(id: number) {
    return this.httpClient.get<Room>(`${this.readUri}/${id}`)
  }

  updateRoom(id: number, room: Room) {
    return this.httpClient.put<CommandResponse>(`${this.writeUri}/${id}`, room)
  }

}
