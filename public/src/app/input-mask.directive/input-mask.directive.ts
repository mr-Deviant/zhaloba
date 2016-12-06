import { Directive, Input, ElementRef } from '@angular/core';

declare var Inputmask: any; // I didn't find typings for library

// IDEA: maybe use placeholder with mask instead of masked input!!!!

@Directive({
	selector: '[appInputMask]'
})
export class InputMaskDirective {
	@Input('appInputMask') set phoneMask(value: string) {
		// If user input something in current field don't change mask
		if (this.element.nativeElement.value === '') {
			Inputmask.remove(this.element);
			Inputmask(value).mask(this.element);
		}
	}

	// TODO: add custom validation using method isValid

	constructor(private element: ElementRef) {
		Inputmask('').mask(this.element);
	}
}
