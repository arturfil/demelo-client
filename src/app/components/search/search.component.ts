import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SpotifyApiService } from '../../services/spotify-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;

  constructor(
    private spotifyThang: SpotifyApiService
  ) { }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyThang.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artists.items);
      })
  }

}
