import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { authGuard } from '../../services/guards/auth.guard';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { EditResumeComponent } from './pages/edit-resume/edit-resume.component';
import { HomeComponent } from './pages/home/home.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
      {
        path: 'profile/:id',
        component: CreateResumeComponent,
        canActivate: [authGuard],
      },
      {
        path: 'edit/:id',
        component: EditResumeComponent,
        canActivate: [authGuard],
      },
      {
        path: 'not-authorized',
        component: NotAuthorizedComponent,
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
