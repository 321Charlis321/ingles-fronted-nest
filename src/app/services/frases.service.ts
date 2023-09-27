import { Injectable, computed, inject, signal } from '@angular/core';
import { Frase } from '../interfaces';
import { HttpClient } from '@angular/common/http';


import { Observable, map } from 'rxjs';
import { environments } from 'src/environments/environments';



@Injectable({
  providedIn: 'root'
})
export class FrasesService {


  private readonly baseUrl: string = environments.baseUrl;
  private _currentFrase = signal<Frase | null>(null);
  private http = inject(HttpClient);
  //!Al mundo exterior
  public currentFrase = computed(() => { this._currentFrase });




  constructor() { }



  getFrases(): Observable<Frase[]> {
    return this.http.get<Frase[]>(`${this.baseUrl}/frases`)
      .pipe(map((frases) => frases));

    // pipe(map((data: any) => data.artists.items));


  }

  // frases: Frase[] = [
  //   {
  //     id: '1',
  //     frase: "It's about the time"
  //   },
  //   {
  //     id: '2',
  //     frase: "Times's up"
  //   },
  //   {
  //     id: '3',
  //     frase: "I'm afraid so"
  //   },
  //   {
  //     id: '4',
  //     frase: "All in all"
  //   },
  //   {
  //     id: '5',
  //     frase: "As far as I know"
  //   },
  //   {
  //     id: '6',
  //     frase: "Belive it or not"
  //   },
  //   {
  //     id: '7',
  //     frase: "Not too bad"
  //   },
  //   {
  //     id: '8',
  //     frase: "Go for it"
  //   },
  //   {
  //     id: '9',
  //     frase: "I've go to run"
  //   },
  //   {
  //     id: '10',
  //     frase: "That's very kind of you"
  //   },
  //   {
  //     id: '11',
  //     frase: "I know so"
  //   },
  //   {
  //     id: '12',
  //     frase: "You've got to be kidding me"
  //   },
  //   {
  //     id: '13',
  //     frase: "Nothing for me"
  //   },
  //   {
  //     id: '14',
  //     frase: "That sounds like a good idea"
  //   },
  //   {
  //     id: '15',
  //     frase: "What a pity!"
  //   },
  //   {
  //     id: '16',
  //     frase: "It would be fun"
  //   },
  //   {
  //     id: '17',
  //     frase: "I'm outta here"
  //   },
  //   {
  //     id: '18',
  //     frase: "Go ahead"
  //   },
  //   {
  //     id: '19',
  //     frase: "Don't tempt me!"
  //   },
  //   {
  //     id: '20',
  //     frase: "I'd love to"
  //   },
  //   {
  //     id: '21',
  //     frase: "Here you are"
  //   },
  //   {
  //     id: '22',
  //     frase: "Hang in there"
  //   },
  //   {
  //     id: '23',
  //     frase: "I'm on it"
  //   },
  //   {
  //     id: '24',
  //     frase: "Glad to help"
  //   },
  //   {
  //     id: '25',
  //     frase: "Thanks a lot"
  //   },
  //   {
  //     id: '26',
  //     frase: "So long"
  //   },
  //   {
  //     id: '27',
  //     frase: "You wish"
  //   },
  //   {
  //     id: '28',
  //     frase: "Anything you say"
  //   },



  // ]
  // getfrases() {
  //   return this.frases;

  // }
}
