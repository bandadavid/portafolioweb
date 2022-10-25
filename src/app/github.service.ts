import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/bandadavid/repos';

  constructor(private httpClient: HttpClient) { }


  LoadRepos = () => this.httpClient.get(this.url)
  .pipe(
    map((item:any) => item.filter((value: { fork: any; }) => !value.fork)),
    map((item:any) => item.filter((value: { stargazers_count: any; }) => value.stargazers_count >= 1))
  );

}
