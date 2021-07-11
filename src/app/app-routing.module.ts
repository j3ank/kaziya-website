import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  },
  {
    path: 'imprint',
    loadChildren: () => import('./imprint/imprint.module').then(m => m.ImprintModule)
  },
  {
    path: 'licenses',
    loadChildren: () => import('./licenses/licenses.module').then(m => m.LicensesModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
