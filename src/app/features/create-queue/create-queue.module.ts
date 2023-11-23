import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/shared/shared.module';

import { CreateQueueComponent } from './create-queue/create-queue.component';
import { CreateQueueRoutingModule } from './create-queue-routing.module';
import { LinksSectionComponent } from './links-section/links-section.component';
@NgModule({
  declarations: [CreateQueueComponent, LinksSectionComponent],
  imports: [CreateQueueRoutingModule, SharedModule, NgbModule],
  providers: [NgbActiveModal],
})
export class CreateQueueModule {}
