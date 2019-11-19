import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MascotasService } from '../shared/mascotas.service';
import { Router } from '@angular/router';
import { ClrOutsideClickModule } from '@clr/angular/utils/outside-click/outside-click.module';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {
  
  mascotasForm = this.fb.group({
        nombre:['', (Validators.required,             
                         Validators.minLength(3))],
        tipo: ['', (Validators.required)],
        edad: ['', (Validators.required,
                                     Validators.pattern('[0-9]+'))],
        descripcion: ['', (Validators.required)],
  });

  constructor(private fb: FormBuilder, private mascotasService: MascotasService, private router: Router ){ }
  ngOnInit() { }
 
onSubmit() {
  // TODO: Use EventEmitter with form value
  
  this.mascotasService.addMascota(this.mascotasForm.value).subscribe(data => {
    this.goBack();
})}

resetAll(){
 this.mascotasForm.reset();
}

goBack(){
  this.router.navigate(['/mascotas-listar']);
}

}