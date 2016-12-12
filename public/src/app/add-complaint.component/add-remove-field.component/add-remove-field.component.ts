import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-add-remove-field]',
  templateUrl: './add-remove-field.component.html',
  styleUrls: ['./add-remove-field.component.less']
})
export class AddRemoveFieldComponent {
	@Input() isAddAllowed: boolean;
	@Input() isRemoveAllowed: boolean;
	@Output() onAddField: EventEmitter<string> = new EventEmitter<string>();
	@Output() onRemoveField: EventEmitter<string> = new EventEmitter<string>();

	addField() {
		this.onAddField.emit('');
	}
	removeField() {
		this.onRemoveField.emit('');
	}
}