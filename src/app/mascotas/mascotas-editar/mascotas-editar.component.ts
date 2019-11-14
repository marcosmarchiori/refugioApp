import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {
  
    mascotas= new FormGroup({
      nombre: new FormControl ('', [Validators.required,
                                  Validators.minLength(3)]),
      tipo: new FormControl ('', Validators.required),
      edad: new FormControl('', [Validators.required,
                                Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      descripcion: new FormControl ('', Validators.required),
      id: new FormControl("")
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotasService: MascotasService,
    
    ) {
       }

  ngOnInit() {  
  
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.mascotasService.getMascota(id).subscribe(data=>{
      this.mascotas.setValue(data);
      
    })
}

onSubmit() {
  // TODO: Use EventEmitter with form value
  
  this.mascotasService.updateMascota(this.mascotas.value).subscribe(data => {
    this.router.navigate(['/mascotas-listar']);
})}

goBack(){
  this.router.navigate(['/mascotas-listar']);
}

}