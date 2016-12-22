export enum Type {
	Service,
	Product
};

export class Complaint {
	type: Type;

	company: Array<string> = [''];
	site: Array<string> = [''];
	surname: Array<string> = [''];
	name: Array<string> = [''];
	patronymic: Array<string> = [''];
	country: Array<string> = [''];
	city: Array<string> = [''];
	address: Array<string> = [''];
	phone: Array<string> = [''];
	bankCard: Array<string> = [''];

	productName: string = '';
	barcode: string = ''; // TODO: maybe number

	problemShort: string = '';
	problemFull: string = '';
	agree: boolean;
}