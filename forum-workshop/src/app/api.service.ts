import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { development } from './environments/development.environment'
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getThemes() {
   return this.http.get<Theme[]>(`${development.API}/themes`)
  }

  getPosts() {
    return this.http.get<Post[]>(`${development.API}/posts`)
  }
}
