import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LoginComponent],
  imports: [AccountRoutingModule, SharedModule, NgbModule, RouterModule],
  providers: [NgbActiveModal],
})
export class AccountModule {}
