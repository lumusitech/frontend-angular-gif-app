import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private readonly gifService: GifsService) {}

  get gifs() {
    return this.gifService.gifList;
  }
}
