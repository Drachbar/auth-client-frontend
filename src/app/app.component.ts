import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth-client-frontend';
  httpClient = inject(HttpClient);

  login() {
    const body = {
      email: 'test@example.com',
      password: 'Test123!',
      clientId: 'auth_client'
    };

    this.httpClient.post('http://localhost:9090/api/v1/frontend/auth/login', body, {withCredentials: true}).subscribe({
      next: () => console.log('Inloggning lyckades'),
      error: err => console.error('Fel vid inloggning:', err)
    })
  }


  refresh() {
    this.httpClient.get('http://localhost:9090/api/v1/frontend/auth/refresh', { withCredentials: true }).subscribe({
      next: () => console.log('refresh lyckades'),
      error: err => console.error('Fel vid refresh:', err)
    })
  }
}
