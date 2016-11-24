import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface countryInterface {
	countryCode: string;
}

@Injectable()
export class CountryService {
	private countryUrl = 'http://localhost:3000/country'; // TODO: use constant
	private countryByIpUrl = this.countryUrl + '/by-ip';

	constructor(private http: Http) {

	}

	getAll() {//: countryInterface
		return this.http.get(this.countryUrl).toPromise();
	}

	getByIp() {
		
	}
}