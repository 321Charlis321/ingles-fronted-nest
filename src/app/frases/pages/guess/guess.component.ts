import { Component, Input, OnInit } from '@angular/core';
import { FrasesService } from '../../../services/frases.service';
import { Frase } from '../../interfaces';


@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styles: [
  ]
})
export class GuessComponent implements OnInit {

  @Input('frases') public frases: Frase[] = [];
  public resultado: any;

  constructor(private frasesService: FrasesService) {

  }

  ngOnInit(): void {

    this.frasesService.getFrases()
      .subscribe(data => {
        this.frases = data;
        // console.log(data);

      })

  }

  generate(): void {

    var firstname = this.frases;

    var rand_first = Math.floor(Math.random() * firstname.length);

    this.resultado = firstname[rand_first].ingles;
    console.log(this.resultado);


  }





}
