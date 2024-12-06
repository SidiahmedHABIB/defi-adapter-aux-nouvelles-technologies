import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginResponse, UserModel } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiBaseUrl}/users`;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Registers a new user.
   * @param userData - The user data for registration.
   * @returns An observable of the server response.
   */
  register(userData: UserModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  /**
   * Logs in a user.
   * @param userData - The user's login credentials.
   * @returns An observable of the login response.
   */
  login(userData: UserModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, userData).pipe(
      map((response: LoginResponse) => {
        if (response.message === 'Login successful') {
          this.storeUserSession(response);
        }
        return response;
      })
    );
  }

  /**
   * Logs out the current user by clearing the local storage and navigating to the login page.
   */
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  /**
   * Stores user session data in local storage.
   * @param response - The login response containing user details.
   */
  private storeUserSession(response: LoginResponse): void {
    localStorage.setItem(environment.isAuthenticated, 'true');
    localStorage.setItem(environment.userId, response.userId);
    localStorage.setItem(environment.userName, response.fname);
  }
}
