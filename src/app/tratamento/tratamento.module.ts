import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TratamentoRoutingModule } from './tratamento-routing.module';
import { TratamentoFormComponent } from './tratamento-form/tratamento-form.component';
import { TratamentoListaComponent } from './tratamento-lista/tratamento-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TratamentoFormComponent,
    TratamentoListaComponent
  ],
  imports: [
    CommonModule,
    TratamentoRoutingModule,
    FormsModule,
    RouterModule
  ], exports : [
    TratamentoFormComponent,
    TratamentoListaComponent
  ]
})
export class TratamentoModule { }
