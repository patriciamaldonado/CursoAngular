import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // private apiUrl: string = 'https://restcountries.com/v3.1'; 
  private apiUrl2: string = 'https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }
  
  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl2}/name/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
   
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl2}/capital/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
   
  }

  getPaisPorCodigo(id: string): Observable<Country>{
    const url = `${this.apiUrl2}/alpha/${id}`
    return this.http.get<Country>(url);
   
  }

  buscarRegion(region: string): Observable<Country[]>{
  
    const url = `${this.apiUrl2}/regionalbloc/${region}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(tap(console.log));
   
  }


}
