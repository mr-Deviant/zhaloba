/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddComplaintService } from './add-complaint.service';

describe('AddComplaintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddComplaintService]
    });
  });

  it('should ...', inject([AddComplaintService], (service: AddComplaintService) => {
    expect(service).toBeTruthy();
  }));
});
