import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiCallingInAngular';
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  apiData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data) => {
      console.warn(data)
      this.apiData = data;
    })
  }
}
