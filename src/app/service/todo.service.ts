import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService{
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getTodoDetails() : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }

}
