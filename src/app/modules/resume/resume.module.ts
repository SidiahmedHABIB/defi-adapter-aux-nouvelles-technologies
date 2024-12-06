import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the routing module to use the routes defined in ResumeRoutingModule
import { ResumeRoutingModule } from './resume-routing.module';

// Import components
import { ResumeComponent } from './resume.component';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { EditResumeComponent } from './pages/edit-resume/edit-resume.component';
import { HomeComponent } from './pages/home/home.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    ResumeComponent,
    CreateResumeComponent,
    EditResumeComponent,
    HomeComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    CommonModule, // For common Angular directives like ngIf, ngFor, etc.
    ResumeRoutingModule, // The routing configuration for this module
  ],
})
export class ResumeModule {}
