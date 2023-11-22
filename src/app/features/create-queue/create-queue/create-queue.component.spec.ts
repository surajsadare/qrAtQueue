import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueueComponent } from './create-queue.component';

describe('CreateQueueComponent', () => {
  let component: CreateQueueComponent;
  let fixture: ComponentFixture<CreateQueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQueueComponent]
    });
    fixture = TestBed.createComponent(CreateQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
