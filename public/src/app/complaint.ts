enum Type {
	Service,
	Product
};

export class Complaint {
	type: Type = 1;

	company: Array<string> = [''];
	site: Array<string> = [''];
	name: Array<string> = [''];
	surname: Array<string> = [''];
	patronymic: Array<string> = [''];
	country: Array<string> = [''];
	city: Array<string> = [''];
	address: Array<string> = [''];
	phone: Array<Array<string>> = [['', '', '']];

	productName: string = '';
	barcode: string = ''; // TODO: maybe number

	problemShort: string = '';
	problemFull: string = '';
	agree: boolean;
}