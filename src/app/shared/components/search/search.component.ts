import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();
  searchTerm: string = '';

  onSearch(searchTerm) {
    this.search.emit(searchTerm);
  }
}
