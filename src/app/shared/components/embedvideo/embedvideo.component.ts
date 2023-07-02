import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Imovie } from '../../modals/movies';

@Component({
  selector: 'app-embedvideo',
  templateUrl: './embedvideo.component.html',
  styleUrls: ['./embedvideo.component.scss'],
})
export class EmbedvideoComponent implements OnInit {
  @Input() site!: string;
  @Input() key!: string;
  @Input() movie!: Imovie;
  trailerUrl!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.key) {
      const url = `https://www.youtube.com/embed/${this.key}`;
      this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}
