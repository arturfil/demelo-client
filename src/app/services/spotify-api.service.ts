import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyApiService {

  private searchUrl: string;

  constructor(
    private httpThang: Http
  ) { }

  searchMusic(str: string, type="artist") {
    this.searchUrl =
    'https://api.spotify.com/search?query='+'str'+'&offset=0&limit=20&type='+type+'&market=US';
    return this.httpThang.get(this.searchUrl)
      .map(res => res.json());
  }

}
