import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { CountryService } from '../country.service/country.service';
import { Restangular } from 'ng2-restangular';

// TODO: open with blurring is not working

@Component({
	selector: 'app-add-complaint',
	templateUrl: './add-complaint.component.html',
	styleUrls: ['./add-complaint.component.less']
})
export class AddComplaintComponent implements OnInit {
	complaint: Complaint = new Complaint();
	countries: Array<any> = [];
	userCountry: string;
	submitted: boolean = false;

	constructor(
		private restangular: Restangular,
		private countryService: CountryService
	) { }

	ngOnInit(): void {
		this.getCountries();
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

	trackByIndex(index: number, obj: any): any {
		return index;
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

	addComplaint(form) {
		this.submitted = true;
		
		if (form.valid) {
			this.restangular.all('complaint').post(this.complaint);
		}
	}
}