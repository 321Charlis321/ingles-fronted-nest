import { Component, OnInit } from '@angular/core';
import { FrasesService } from '../../services/frases.service';
import { Frase } from '../../interfaces/frases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public frases: string[] = [];
  public fra: Frase[] = [];
  public word = '';


  constructor(private frasesService: FrasesService
  ) { }
  ngOnInit(): void {
    this.frasesService.getFrases()

      .subscribe(frases =>
        this.fra = frases
      )


  }


  generar() {


    const resultado = this.fra.map(elemnt => {
      return elemnt.ingles;

    })


    this.frases = resultado;
    var rand_first = Math.floor(Math.random() * this.frases.length);
    this.word = this.frases[rand_first]

    console.log(this.word);

  }






}
