import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styles: [
  ]
})
export class MatchComponent {

  constructor(private _gifsService: GifsService) { }


  get results() {
    return this._gifsService.results;
  }
}
