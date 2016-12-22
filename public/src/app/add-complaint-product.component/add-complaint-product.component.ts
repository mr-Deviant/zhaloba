import { Component, OnInit } from '@angular/core';
import { Type, Complaint } from '../complaint';
import { AddComplaintService } from '../add-complaint.service/add-complaint.service';

@Component({
  //selector: 'app-add-complaint-product',
  templateUrl: './add-complaint-product.component.html',
  styleUrls: ['./add-complaint-product.component.less']
})
export class AddComplaintProductComponent implements OnInit {
	complaint: Complaint = new Complaint();

	constructor(public addComplaintService: AddComplaintService) {
		// Pass by reference
		this.complaint.type = Type.Product;
		this.addComplaintService.complaint = this.complaint;
		// Reset state
		this.addComplaintService.submitted = false;
		this.addComplaintService.loading = false;
	}

	ngOnInit() { }
}
