import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Restangular } from 'ng2-restangular';
import { Complaint } from '../complaint';


@Injectable()
export class AddComplaintService {
	complaint: Complaint;
	submitted: boolean;
	loading: boolean;

	constructor(
		private location: Location,
		private router: Router,
		private restangular: Restangular
	) { }

	back() {
        this.location.back();
    }

	addComplaint(form) {
		this.submitted = true;
		
		if (form.valid) {
			this.loading = true;
			this.restangular
				.all('complaint')
				.post(this.complaint)
				.subscribe(res => {
					this.loading = false;

					this.router.navigate(['/zhaloba', res._id]);
				});
		}
	}
}
