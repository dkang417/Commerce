import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

import { CommerceManagerComponent } from './commerce-manager.component';

export const component: any[] = [
  ProductDetailsComponent,
  ProductListComponent,
  ProductNewComponent,
  ProductUpdateComponent,
  CommerceManagerComponent
];

export * from './product-details/product-details.component';
export * from './product-list/product-list.component';
export * from './product-new/product-new.component';
export * from './product-update/product-update.component';
export * from './commerce-manager.component';

