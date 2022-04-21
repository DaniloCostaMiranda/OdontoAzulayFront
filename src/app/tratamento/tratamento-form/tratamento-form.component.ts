import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Tratamento } from '../tratamento';
import { TratamentoService } from 'src/app/tratamento.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratamento-form',
  templateUrl: './tratamento-form.component.html',
  styleUrls: ['./tratamento-form.component.css']
})
export class TratamentoFormComponent implements OnInit {

  success: boolean = false;
  errors: String[];
  clientes: Cliente[] = []
  tratamentoIniciado: Tratamento;
  constructor(
    private clienteService: ClientesService,
    private tratamentoService: TratamentoService,
    private router: Router
  ) { 
    this.tratamentoIniciado = new Tratamento();
  }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe(response => this.clientes = response)
  }

  voltarParaLista(){
    this.router.navigate(['/tratamentos/lista'])
  }

  onSubmit(){
    this.tratamentoService
    .salvar(this.tratamentoIniciado)
    .subscribe(response => {
      this.success = true;
    this.errors = null;
    this.tratamentoIniciado = new Tratamento();
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
      
    })
  }

}
