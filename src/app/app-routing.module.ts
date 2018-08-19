import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as CommerceManager from './commerce-manager';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: CommerceManager.CommerceManagerComponent,
    children: [
      {
        path: '',
        component: CommerceManager.ProductListComponent
      },
      {
        path: 'new',
        component: CommerceManager.ProductNewComponent
      },
      {
        path: ':id',
        component: CommerceManager.ProductDetailsComponent
      },
      {
        path: ':id/edit',
        component: CommerceManager.ProductUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
