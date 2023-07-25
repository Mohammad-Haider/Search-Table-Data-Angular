import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor(private http: HttpClient) {}

  url: any = 'http://localhost:3000/users';

  saveUsers(data: any) {
    return this.http.post(this.url, data);
  }

  showUsers() {
    return this.http.get(this.url);
  }
}
