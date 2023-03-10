import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial(): string[] {
    return this._gifsService.historial;
  }


  constructor(private _gifsService: GifsService) { }

  searchGif(page: string) {
    this._gifsService.searchGifs(page);
  }
}
