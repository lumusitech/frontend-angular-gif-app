import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Array<Gif> = [];

  private _tagsHistory: Array<string> = [];
  private apiKey = 'MgXyXlI5QI2FLd0laaR5SeeBvnsigMUN';
  private serviceUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private readonly http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (!tag) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 10);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }

  organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }
}
