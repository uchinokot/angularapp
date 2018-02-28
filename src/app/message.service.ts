import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  fetch() {
    return this.http.get('http://localhost:3200/messages.json')
      .map(response => response.json());
  }

}
