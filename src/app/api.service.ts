import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Person } from "./person";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiService {
  baseUrl = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseUrl + "people");
  }

  addPerson(person: Person): Observable<any> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(person);
    return this.httpClient.post(this.baseUrl + "people", body, {
      headers: headers
    });
  }
}
