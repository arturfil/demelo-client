import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class SpotifyApiService {

  baseUrl: string = environment.apiUrl;

  private searchUrl: string;

  constructor(
    private httpThang: HttpClient
  ) { }

  // searchMusic(str: string, type="artist") {
  //   this.searchUrl =
  //   'https://api.spotify.com/search?query='+'str'+'&offset=0&limit=20&type='+type+'&market=US';
  //   return this.httpThang.get(this.searchUrl)
  //     .map(res => res.json());
  // }

  searchMusic(str: string, type="artist") {

  }

  getQuery(queryTerm: any) {
    return this.httpThang.get(
      this.baseUrl + '/api/tracks/' + queryTerm
    );
  }

}
