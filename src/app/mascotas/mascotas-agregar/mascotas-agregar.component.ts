import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MascotasService } from '../shared/mascotas.service';
import { Router } from '@angular/router';
import { ClrOutsideClickModule } from '@clr/angular/utils/outside-click/outside-click.module';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {
  
  mascotas: FormGroup;
  ngOnInit() { }
  

  constructor(private mascotasService: MascotasService, private router: Router) {  this.mascotas = new FormGroup({
    nombre: new FormControl ('', [Validators.required,
                                Validators.minLength(3)]),
    tipo: new FormControl ('', Validators.required),
    edad: new FormControl('', [Validators.required,
                              Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    descripcion: new FormControl ('', Validators.required)
});}

 
onSubmit() {
  // TODO: Use EventEmitter with form value
  
  this.mascotasService.addMascota(this.mascotas.value).subscribe(data => {
    this.goBack();
})}

resetAll(){
 this.mascotas.reset();
}

goBack(){
  this.router.navigate(['/mascotas-listar']);
}

}