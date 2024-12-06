import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { EditResumeComponent } from './pages/edit-resume/edit-resume.component';
import { HomeComponent } from './pages/home/home.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'profile/:id',
        component: CreateResumeComponent,
      },
      {
        path: 'edit/:id',
        component: EditResumeComponent,
      },
      {
        path: 'not-authorized',
        component: NotAuthorizedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
