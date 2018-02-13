import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTable } from './component/datatable.component';     // Add this
import { AddRecord } from './component/addrecord.component';
import { EditRecord } from './component/editrecord.component';

const routes: Routes = [
{
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
	//component:DataTable
  },
  {
    path: 'add',
	component: AddRecord
  },
  
  {
    path: 'edit/:id',
	component: EditRecord
  },
  {
    path: 'showtable',
	component: DataTable
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
