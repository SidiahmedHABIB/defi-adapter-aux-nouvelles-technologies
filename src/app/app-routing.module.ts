import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './modules/resume/components/loading/loading.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { IndexComponent } from './page/index/index.component';
import { MainComponent } from './modules/resume/pages/main/main.component';
import { authGuard } from './services/guards/auth.guard';
import { HomeComponent } from './modules/resume/pages/home/home.component';
import { CreateResumeComponent } from './modules/resume/pages/create-resume/create-resume.component';
import { EditResumeComponent } from './modules/resume/pages/edit-resume/edit-resume.component';
import { NotAuthorizedComponent } from './modules/resume/pages/not-authorized/not-authorized.component';
import { PageNotFoundComponent } from './modules/resume/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: IndexComponent },
  {
    path: 'myresume',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/resume/resume.module').then((m) => m.ResumeModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
