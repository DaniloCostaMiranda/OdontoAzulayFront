import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { TratamentoFormComponent } from './tratamento-form/tratamento-form.component';
import { TratamentoListaComponent } from './tratamento-lista/tratamento-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: 'tratamentos', component: LayoutComponent, canActivate:[AuthGuard], children: [
    {path: 'form', component:TratamentoFormComponent},
    {path: 'lista', component:TratamentoListaComponent},
    {path: '', redirectTo: '/tratamentos/lista', pathMatch: 'full'}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TratamentoRoutingModule { }
