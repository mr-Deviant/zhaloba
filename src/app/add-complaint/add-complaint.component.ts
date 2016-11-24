import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service/country.service';

class Complaint {
	company: Array<string> = [''];
	name: Array<string> = [''];
	surname: Array<string> = [''];
	patronymic: Array<string> = [''];
	country: Array<string> = [''];
	city: Array<string> = [''];
	address: Array<string> = [''];
}

// TODO: open with blurring is not working

@Component({
	selector: 'app-add-complaint',
	templateUrl: './add-complaint.component.html',
	styleUrls: ['./add-complaint.component.less']
})
export class AddComplaintComponent implements OnInit {
	complaint: Complaint = new Complaint();
	countries: Array<Object>;
	that = this;

	constructor(private countryService: CountryService) { }

	ngOnInit(): void {
		this.getCountries();
	}

	getCountries() {
		return this.countryService.getAll()
			.then(this.extractData)
			.then(data => this.countries = data);
	}

	extractData(res) { //: Response
		let body = res.json();
    	return body.data || {};
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

	addComplaint() {
		
	}
}