import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { CreateQueueRoutingModule } from './create-queue-routing.module';
@NgModule({
  declarations: [CreateQueueComponent],
  imports: [CreateQueueRoutingModule, SharedModule, NgbModule, RouterModule],
  providers: [NgbActiveModal],
})
export class CreateQueueModule {}
