import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [
    {
      id:100,
      group:1,
      name: "Augustina Boos"
    },
    {
      id:101,
      group:2,
      name: "Sven Korp"
    },
    {
      id:102,
      group:1,
      name: "Zoria Müller"
    },
    {
      id:103,
      group:3,
      name: "Sofia Sutterstrand"
    }
  ]

  constructor() { }

  getUsers():any[] {
    return this.users;
  }
}
