import { Component } from '@angular/core';
import { AuthService } from '../../../../services/services/auth.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  userName: string | null = null; // Initialize username variable

  constructor(protected authService: AuthService) {}
  ngOnInit(): void {
    this.getUserFromLocalStorage();
  }

  getUserFromLocalStorage(): void {
    // Get username from local storage
    this.userName = localStorage.getItem(environment.userName);
    // If you have a Constants class, replace 'userName' with Constants.userName
  }
  handleLogout(): void {
    this.authService.logout();
  }
}
