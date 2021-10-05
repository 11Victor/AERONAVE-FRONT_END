import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aeronave } from '../model/Aeronave';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aeronave: Aeronave = new Aeronave()
  getAll: Aeronave[];

  listaAeronave: Aeronave[];
  idAeronave: Aeronave;
  nomeAeronave: string;

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.getAllAeronave()
  }

  getAllAeronave(){
    this.authService.getAllAeronave().subscribe((resp: Aeronave[]) => {
      this.getAll = resp
    })
  }
  

  getById(id: number){
    this.authService.getByIdAeronave(id).subscribe((resp: Aeronave) => {
      this.aeronave = resp
    })
  }

  cadastrar(){
    this.authService.cadastrar(this.aeronave).subscribe((resp: Aeronave) => {
      this.aeronave = resp
      alert('Aeronave cadastrada com Sucesso!')
    })
  }

  editar(){
    this.authService.editar(this.aeronave).subscribe((resp: Aeronave) => {
      this.aeronave = resp
      alert('Aeronave alterada com Sucesso!')
    })
  }

  excluir(id: number){
    this.authService.deletar(id).subscribe((resp: Aeronave) => {
      this.aeronave = resp
      alert('Aeronave excluída com Sucesso!')
    })
  }
  
  


}
