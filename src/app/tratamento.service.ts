import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamento } from './tratamento/tratamento';
import { environment } from 'src/environments/environment';
import { TratamentoBusca } from './tratamento/tratamento-lista/tratamentoBusca';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class TratamentoService {

  apiURL: string = environment.apiURLBase + "/tratamentos"

  constructor(private http: HttpClient) { }

  salvar(tratamento: Tratamento) : Observable<Tratamento>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.post<Tratamento>(this.apiURL, tratamento, {headers});
  }

  pesquisar(nome: string, status: string) : Observable<TratamentoBusca[]> {
  
    const httpParams = new HttpParams().set("nome", nome).set("status", status);
    
    const url = this.apiURL + "?" + httpParams.toString();
    
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.get<any>(url, {headers});
  }
}
