import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutosService {

  constructor(private http: HttpClient) { }

  getValues(): any {
    return this.http.get("https://automoviles.free.beeceptor.com/").pipe(take(1));
  }
}
