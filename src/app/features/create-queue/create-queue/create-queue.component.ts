import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.scss'],
})
export class CreateQueueComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  navigateToLinks() {
    this.router.navigate(['app/links']);
  }
}
