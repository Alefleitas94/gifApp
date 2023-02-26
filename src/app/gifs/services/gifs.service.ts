import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIF, GIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'lx7CFU2P7UdH4kPNqqQFXavqSoEbzGfN';
  private _urlService: string = `https://api.giphy.com/v1/gifs`;
  private limit: number = 10;
  private _historial: string[] = [];

  public results: GIF[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private _http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('data')!) || [];
  }

  searchGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (query != '' && !this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', query)
      .set('limit', this.limit.toString());

    this._http.get<GIFResponse>(`${this._urlService}/search?`, { params: params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('data', JSON.stringify(this.results))
      });

  }

}
