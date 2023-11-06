import { Component, Input, OnInit, Output } from '@angular/core';
import { Frase } from '../../interfaces/frases';
import { Router } from '@angular/router';
import { FrasesService } from 'src/app/services/frases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalupdate',
  templateUrl: './modalupdate.component.html',
  styles: [
  ]
})
export class ModalupdateComponent implements OnInit {

  constructor(
    private router: Router,
    private frasesService: FrasesService
  ) { }
  @Input('update')
  public frases: Frase[] = [];

  public id: any;
  public frase2: Frase[] = [];

  public cargando: boolean = true;

  ngOnInit(): void {

    // throw new Error('Method not implemented.');
    if (!this.frases) throw Error('frase property is require');
    // console.log(this.frases!);
  }

  verId(idx: string) {
    this.router.navigate(['/frase/edit', idx]);
    console.log(idx);



  }

  cargarFrase() {
    this.cargando = true;
    this.frasesService.getFrases()
      .subscribe(data => {
        this.id = data;
        this.cargando = false;
        this.frases = data;
        // console.log(this.id);

      })
  }
  onDeleteHero(frase: Frase): void {

    Swal.fire({

      title: 'Are you sure ',
      html: `Do you want to delete the phrase  <b>  ${frase.ingles}? </b> `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        if (frase) {
          this.frasesService.deleteByFrase(frase).subscribe(resp => {

            this.cargarFrase();
          })
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'canceled',
          'Frase no deleted',
          'error'
        )
      }
    })









    // if (frase) {
    //   this.frasesService.deleteByFrase(frase)
    //     .subscribe(resp => {
    //       this.cargarFrase();
    //       // Swal.fire('Borrado', frase.ingles, 'success');
    //     });
    //   // err => console.warn(err.error)
    //   this.id;
    //   console.log(this.id);



    // }
  }

}
