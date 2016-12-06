export class Complaint {
	company: Array<string> = [''];
	site: Array<string> = [''];
	name: Array<string> = [''];
	surname: Array<string> = [''];
	patronymic: Array<string> = [''];
	country: Array<string> = [''];
	city: Array<string> = [''];
	address: Array<string> = [''];
	phone: Array<any> = [['', '', '']];
	problemShort: string = '';
	problemFull: string = '';
	agree: boolean;
}