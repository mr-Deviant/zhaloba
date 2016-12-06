import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

interface countryInterface {
	countryCode: string;
}

@Injectable()
export class CountryService {
	private countryUrl = 'http://localhost:3000/country'; // TODO: use constant
	private countryByIpUrl = this.countryUrl + '/by-ip';

	constructor(private http: Http) {}

	getAll() {// TODO: check caching
		return this.http.get(this.countryUrl);
	}

	getByIp() {
		return this.http.get(this.countryByIpUrl);
	}
}