import { Component, Input, OnInit } from '@angular/core';
import { Frase } from '../../interfaces';
import { FrasesService } from '../../../services/frases.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  public frases: Frase[] = [];
  public id: any;
  // public frase!: Frase;
  constructor(private frasesService: FrasesService) { }

  ngOnInit(): void {

    this.frasesService.getFrases().subscribe(data =>
      this.frases = data
    )
    // console.log(this.frases)

  }
  botonEditar() {
    this.id = this.frases[0]._id
    console.log(this.id);
  }


}
