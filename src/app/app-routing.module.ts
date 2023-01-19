import { RouterModule, Routes } from '@angular/router';

import { ArmyListComponent } from './army-list/army-list.component';
import { CreateArmyComponent } from './create-army/create-army.component';
import { NgModule } from '@angular/core';
import { UpdateArmyComponent } from './update-army/update-army.component';

const routes: Routes = [
  { path:  '', pathMatch:  'full', redirectTo:  'list'},
  { path: 'list', component: ArmyListComponent},
  { path: 'update/:id', component: UpdateArmyComponent}, //for loading respective id to be updated
  { path: 'create', component: CreateArmyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
