import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { LinksSectionComponent } from './links-section/links-section.component';
const routes: Routes = [
  {
    path: 'create-queue',
    component: CreateQueueComponent,
  },
  {
    path: 'links',
    component: LinksSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateQueueRoutingModule {}
