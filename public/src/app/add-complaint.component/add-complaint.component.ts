import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { AddComplaintService } from '../add-complaint.service/add-complaint.service';

@Component({
	//selector: 'app-add-complaint',
	templateUrl: './add-complaint.component.html',
	styleUrls: ['./add-complaint.component.less']
})
export class AddComplaintComponent implements OnInit {
	
	constructor() { }

	ngOnInit(): void { }
}