import { Component, OnInit } from '@angular/core';
import { TratamentoBusca } from './tratamentoBusca';
import { TratamentoService } from 'src/app/tratamento.service';

@Component({
  selector: 'app-tratamento-lista',
  templateUrl: './tratamento-lista.component.html',
  styleUrls: ['./tratamento-lista.component.css']
})
export class TratamentoListaComponent implements OnInit {

  nome: string;
  status: string;
  lista: TratamentoBusca[];
  message: string;

  constructor(
    private service: TratamentoService
  ) {
   
   }

  ngOnInit(): void {
  }

  consultar(){
    this.service
    .pesquisar(this.nome, this.status)
    .subscribe(response => {
      this.lista = response;
      if(this.lista.length <= 0 ){
        this.message = "Nenhum registro encontrado."
      } else{
        this.message = null;
      }
    });

  }
}
