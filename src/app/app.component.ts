import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  private baseUrl = environment.baseUrl;

  constructor(http: HttpClient) {
    http
      .get<WeatherForecast[]>(this.baseUrl + 'api/weatherforecast')
      .subscribe(
        (result) => {
          this.forecasts = result;
        },
        (error) => console.error(error)
      );
  }

  title = 'HealthCheck';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
