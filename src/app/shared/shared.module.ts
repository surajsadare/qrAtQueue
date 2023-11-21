import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [NgbModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [NgbModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [],
})
export class SharedModule {}
