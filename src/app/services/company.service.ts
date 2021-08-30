import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _HttpClient:HttpClient) { }
  // 
  getAllStations():Observable<any> 
  {
   return this._HttpClient.get(`http://localhost:3000/stations`)
  }
}
