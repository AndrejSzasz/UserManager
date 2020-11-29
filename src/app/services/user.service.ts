import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { exampleResponse, UserData } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = Object.freeze(exampleResponse);

  constructor() { }

  getUsers(): Observable<readonly UserData[]> {
    return of(this.users);
  }
}
