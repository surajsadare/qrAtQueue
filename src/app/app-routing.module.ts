import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'app/create-queue',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'app/create-queue',
    pathMatch: 'full',
  },
  // {
  //   path: 'app',
  //   component: LayoutComponent,
  //   children: [],
  // },
  {
    path: 'app/create-queue',
    loadChildren: () =>
      import('./features/create-queue/create-queue.module').then(
        (m) => m.CreateQueueModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
