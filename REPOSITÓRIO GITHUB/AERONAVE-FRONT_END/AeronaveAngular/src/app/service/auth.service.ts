import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aeronave } from '../model/Aeronave';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private http: HttpClient
  ) { }

  

  getAllAeronave(): Observable<Aeronave[]>{
    return this.http.get<Aeronave[]>('https://aeronave.herokuapp.com/aeronaves')
  }
  
  getByIdAeronave(id: number):Observable<Aeronave> {
    return this.http.get<Aeronave>(`https://aeronave.herokuapp.com/aeronaves/${id}`);
  }

  cadastrar(aeronave: Aeronave):Observable<Aeronave>{
    return this.http.post<Aeronave>('https://aeronave.herokuapp.com/aeronaves', aeronave)
  }

  editar(aeronave: Aeronave):Observable<Aeronave>{
    return this.http.put<Aeronave>('https://aeronave.herokuapp.com/aeronaves', aeronave)
  }

  
  deletar(id: number):Observable<Aeronave>{
    return this.http.delete<Aeronave>(`https://aeronave.herokuapp.com/aeronaves/${id}`)
  }



}
