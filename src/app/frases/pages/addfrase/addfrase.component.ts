import { Component, Input, OnInit } from '@angular/core';
import { Frase } from '../../interfaces';
import { FrasesService } from '../../../services/frases.service';
import { FormControl, FormGroup, } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { last, switchMap } from 'rxjs';
import { v4 as uuid } from 'uuid'


@Component({
  selector: 'app-addfrase',
  templateUrl: './addfrase.component.html',
  styles: [
  ]
})
export class AddfraseComponent implements OnInit {

  public no: any;

  @Input() get currentFrase(): Frase {
    const frase = this.fraseForm.value as Frase
    return frase;
  }

  constructor(

    private fraseService: FrasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {


  }
  ngOnInit(): void {


    if (!this.router.url.includes('edit')) return; // si no  incluye en la url la palabra edit no se hace nada
    this.activatedRoute.params
      .pipe(
        switchMap(({ _id }) => this.fraseService.getFraseById(_id))
      )
      .subscribe(params => {

        // console.log(params)

        if (!params) return this.router.navigateByUrl('/'); // si no existe
        // this.fraseSeleccionado = params;
        //   //* el reset hace 2 funciones
        // 1:regresa el formulario a su valor original
        // 2: si se le ,manda un argumento, establece el  cada campo cuyo nombre coincvide con el formulario
        this.fraseForm.reset(params);
        // this.fraseForm2.reset(params);
        this.no = params._id;
        // this.idFrase
        // console.log(this.idFrase);

        return;

      }
      )
  }


  public fraseForm = new FormGroup(


    {
      // let abc:number,
      no: new FormControl(),
      ingles: new FormControl<string>('',),
      spanish: new FormControl<string>('',),
      opcion1: new FormControl<string>(''),
      opcion2: new FormControl<string>(''),
      opcion3: new FormControl(''),
    }

  )

  onSubmit(): void {
    //
    if (this.fraseForm.invalid) return;

    if (!this.currentFrase._id) {

      this.fraseService.updateFrase(this.currentFrase)

        .subscribe({
          // console.log(`${frase.ingles} uptape!!`);
          next: () =>
            Swal.fire({
              title: 'OK',
              text: 'Frase Update',
              icon: 'success'
            }),
          error: (message) => {
            Swal.fire('Error', message, 'error')
            console.warn({ throwError: message.error.message });
            console.warn({ throwError: message.message });

          }

        });
      // this.router.navigate(['/list',])
      return;
    }


  }


  guardar() {

    this.currentFrase.no = Math.floor(Math.random() * 99999999);

    // this.router.navigate(['/list'])
    this.fraseService.addFrase(this.currentFrase)
      .subscribe({
        next: () =>
          Swal.fire({
            title: 'OK',
            text: 'Datos Guardado',
            icon: 'success'
          }
          ),

        error: (message) => {
          Swal.fire('Error', message, 'error')
          console.log({ throwError: message });
          // console.warn({})
        }

      },
        // (err)=> console.warn(err.error)
      );



  }


}
