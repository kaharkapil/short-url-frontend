import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-assignment-frontend';
  constructor(private httpClient: HttpClient) { }
  shortURL;

  expiresIn;
  longURL;

  submit() {
    console.log(this.longURL);
    let data = {
      url: this.longURL
    }
    this.httpClient.post(`http://localhost:3000/generate`, data).subscribe(
      (response: any) => {
        console.log(response.url);
        this.shortURL = response.url
        this.expiresIn = response.expiresIn
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
