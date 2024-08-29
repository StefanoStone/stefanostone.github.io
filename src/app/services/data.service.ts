import { Injectable } from '@angular/core';
import {ListItem} from "../models/ListItem";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private getListItems<T>(jsonUrl: string): Observable<T[]> {
    return this.http.get<T[]>(jsonUrl);
  }

  loadListItems(jsonUrl: string, callback: (data: ListItem[]) => void): void {
    this.getListItems<ListItem>(jsonUrl).pipe(
      catchError(error => {
        console.error('Failed to fetch data:', error);
        return of([]);
      })
    ).subscribe((data: ListItem[]) => {
      callback(data);
    });
  }
}
