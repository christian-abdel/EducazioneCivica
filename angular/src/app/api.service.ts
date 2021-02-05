import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = `https://3000-lime-booby-x919lag4.ws-eu03.gitpod.io`;

  getAnnual() {
    const url = `${this.baseUrl}/annual`;
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getPersonal() {
    const url = `${this.baseUrl}/personal`;
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

}
