import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mascotas-adoptar',
  templateUrl: './mascotas-adoptar.component.html',
  styleUrls: ['./mascotas-adoptar.component.css']
})
export class MascotasAdoptarComponent implements OnInit {

  mascotas:Mascota[]
  private router: Router;
  private route: ActivatedRoute
 

  tipos: string[]=["perro", "gato", "tortuga", "pajaro"]
  
  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
  })
  
  }

mascotasTipo(tipo : string){
  console.log("entrada")
  return this.mascotas.filter(mascota => mascota.tipo == tipo)

}

goList(){
  this.router.navigate(['/mascotas-listar']);
}



}
