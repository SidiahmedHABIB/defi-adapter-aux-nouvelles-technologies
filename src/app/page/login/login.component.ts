import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginResponse, UserModel } from '../../services/models/user.model';
import { AuthService } from '../../services/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginRequest!: UserModel;
  errorMessage!: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // private status: StatusService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  handleLogin() {
    this.loginRequest = this.loginForm.value;
    this.authService.login(this.loginRequest).subscribe({
      next: (response: LoginResponse) => {
        console.log(response);
        if (response.message === 'Login successful') {
          if (response.score > 0) {
            this.router.navigateByUrl('/myresume');
          } else {
            this.router.navigateByUrl(`/myresume/portfolio/${response.userId}`);
          }
        } else {
          Swal.fire({
            title: 'Oops...',
            text: 'Invalid username or password',
            icon: 'error',
          });
        }
      },
      error: (error) => {
        Swal.fire({
          title: 'Oops...',
          text: 'Invalid username or password',
          icon: 'error',
        });
      },
    });
  }
}
