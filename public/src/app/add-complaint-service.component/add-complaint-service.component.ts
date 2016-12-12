import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { AddComplaintService } from '../add-complaint.service/add-complaint.service';
import { CountryService } from '../country.service/country.service';

@Component({
  //selector: 'app-add-complaint-service',
  templateUrl: './add-complaint-service.component.html',
  styleUrls: ['./add-complaint-service.component.less']
})
export class AddComplaintServiceComponent implements OnInit {
	complaint: Complaint = new Complaint();
	countries: Array<any> = [];
	userCountry: string;

	constructor(
		public addComplaintService: AddComplaintService,
		private countryService: CountryService
	) {
		// Pass by reference
		this.addComplaintService.complaint = this.complaint;
		// Reset state
		this.addComplaintService.submitted = false;
		this.addComplaintService.loading = false;
	}

	ngOnInit() {
		this.getCountries();
	}

	trackByIndex(index: number, obj: any): any {
		return index;
	}

	getCountries() {
		return this.countryService.getAll()
			.subscribe(result => {
				this.countries = result.json().success ? result.json().data : '';
				this.getUserCountry();
			});
	}

	getUserCountry() {
		return this.countryService.getByIp()
			.subscribe(result => {
				// Save
				this.userCountry = result.json().success ? result.json().data : '';
				// Set
				this.complaint.country[0] = this.userCountry;
			});
	}

	getPhoneMask() {
		let result = '';

		for (var i = 0; i < this.countries.length; i++) {
			if (this.countries[i].code.toLowerCase() === this.complaint.country[0].toLowerCase()) {
				result = this.countries[i].phone;
				break;
			}
		}

		return result;
	}

	isAddAllowed(field) {
  		return this.complaint[field].length < 5;
  	}

  	isRemoveAllowed(field) {
  		return this.complaint[field].length > 1;
  	}

	addField(index, ...field) { // TODO: use same function with removeField
		for (let i = 0; i < field.length; i++) {
			this.complaint[field[i]].splice(index + 1, 0, '');
		}
	}

	removeField(index, ...field) {
		for (let i = 0; i < field.length; i++) {
			this.complaint[field[i]].splice(index, 1);
		}
	}
}
