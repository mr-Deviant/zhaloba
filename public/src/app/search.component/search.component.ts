import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

	constructor(private restangular: Restangular) { }

	ngOnInit() { }

	search = {
		query: '',
		results: []
	};

	submitted = false;
	sended = false;
	loading = false;

	simpleSearch(form) {
		this.submitted = true;
		if (form.valid) {
			this.sended = true;
			this.loading = true;

			this.restangular
				.all('search')
				.customGET('', {search: this.search.query})
				.subscribe(results => {
					this.loading = false;
					this.search.results = this.highlightText(results);
				});
		}
	}

	highlightText(results) {
		for (var i = 0; i < results.length; i++) {
			for (var prop in results[i]) {
				if (!Array.isArray(results[i][prop])) {
					let str = results[i][prop] + '';

					results[i][prop] = this.highlightTextReplace(str);
				} else {
					for (var j = 0; j < results[i][prop].length; j++) {
						let str = results[i][prop][j] + '';

						results[i][prop][j] = this.highlightTextReplace(str);
					}
				}
			}
		}
		
		return results;
	}

	highlightTextReplace(str) {
		// Make search by words and not phrases
		let searchWords = this.search.query.trim()
				// Replace multiple spaces with single one
				.replace(/\s\s+/g, ' ')
				// Make search by words (not phrases), so instead of space insert or operator
				.replace(/ /g, '|');

		// Escape tags, todo: convert emails and site addresses into links
		return str.replace(/&/g,'&amp;')
			.replace(/</g,'&lt;')
			.replace(/>/g,'&gt;')

			// Highlight match text
			.replace(new RegExp(searchWords, "gi"), '<span class="match">$&</span>');
	}
}
