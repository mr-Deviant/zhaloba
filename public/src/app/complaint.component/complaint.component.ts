import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Restangular } from 'ng2-restangular';

@Component({
  // selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.less']
})
export class ComplaintComponent implements OnInit {
	id: string;
	complaint: Object = {};

	constructor(
		private route: ActivatedRoute,
		private restangular: Restangular
	) { }

	ngOnInit() {
		this.route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this.id = id;
				this.getData();
			});
	}

	getData() {
		this.restangular
			.one('complaint', this.id)
			.get()
			.subscribe(res => this.complaint = res);
	}
}
