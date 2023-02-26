import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {

  }

  search() {
    const value = this.txtSearch.nativeElement.value;
    this._gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
