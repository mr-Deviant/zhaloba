import { Component, Input, Output, EventEmitter } from '@angular/core';

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
export class AddComplaintComponent {
	complaint: Complaint = new Complaint();

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