import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.github.com/users';
  private contributionApiUrl = 'https://github-contributions-api.jogruber.de/v4';

  getUser(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}`);
  }

  getContributions(username: string, year: string = 'last'): Observable<any> {
    const url = `${this.contributionApiUrl}/${username}?y=${year}`;
    return this.http.get<any>(url);
  }
}
