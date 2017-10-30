import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SpotifyApiService } from '../../services/spotify-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  queryInput: any;
  tracks: any[];

  constructor(
    private spotifyThang: SpotifyApiService
  ) { }

  ngOnInit() {
  }

  querySubmit() {
    console.log(this.queryInput);
    this.spotifyThang.getQuery(this.queryInput)
      .subscribe(
        (tracksFromApi: any) => {
          this.tracks = tracksFromApi;
        }
      )
  }

}
