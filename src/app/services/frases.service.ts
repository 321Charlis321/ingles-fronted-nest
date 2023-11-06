import { Injectable, computed, inject, signal } from '@angular/core';
import { Frase } from '../frases/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';
// import { Frase } from '../frases/models/frase.model';





@Injectable({
  providedIn: 'root'
})
export class FrasesService {


  private readonly baseUrl: string = environments.baseUrl;
  private http = inject(HttpClient);

  private _currentFrase = signal<Frase | null>(null);

  //!Al mundo exterior
  public currentFrase = computed(() => { this._currentFrase });

  public frasesid!: Frase;

  constructor(


  ) {

  }


  get uid(): string {
    return this.frasesid._id || '';

    // console.log(this.frasesid._id)
  }


  getFrases(): Observable<Frase[]> {
    return this.http.get<Frase[]>(`${this.baseUrl}/frases`)
    // .pipe(map((frases) => frases));

  }


  addFrase(frase: Frase): Observable<Frase> {


    return this.http.post<Frase>(`${this.baseUrl}/frases`, frase)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      )

  }



  getFraseById(id: string): Observable<Frase | undefined> {
    return this.http.get<Frase>(`${this.baseUrl}/frases/${id}`)
      .pipe(

        catchError(error => of(undefined))
      );


  }

  // updateFrase(frase: Frase): Observable<Frase> {

  updateFrase(data: Frase): Observable<Frase> {
    if (!data.no) throw Error(` is rerquired El Id "${data.no}"`)
    // data = {
    //   ...data,
    //   _id: this.uid
    // }

    return this.http.patch<Frase>(`${this.baseUrl}/frases/${data.no}`, data);
  }




  deleteByFrase(frase: Frase) {

    return this.http.delete(`${this.baseUrl}/frases/${frase._id}`,)
      .pipe(
        map(resp => true),
        catchError(err => of(undefined)),
      );
  }







}
