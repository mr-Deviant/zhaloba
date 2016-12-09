import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Component({
  selector: 'app-last-added-complaints',
  templateUrl: './last-added-complaints.component.html',
  styleUrls: ['./last-added-complaints.component.less']
})
export class LastAddedComplaintsComponent implements OnInit {

	complaints = [];

	constructor(private restangular: Restangular) { }

	ngOnInit() {
		this.getLastAddedComplaints();
	}

	getLastAddedComplaints() {
		this.restangular.all('complaint')
			.customGET() // .getList() expect array
			.subscribe(complaints => {
      			this.complaints = complaints.success ? complaints.data : [];
			});
	}
}
