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
import { ResumeTmpOneComponent } from './components/resume-tmp-one/resume-tmp-one.component';
import { ResumeTmpTwoComponent } from './components/resume-tmp-two/resume-tmp-two.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResumeComponent,
    CreateResumeComponent,
    EditResumeComponent,
    HomeComponent,
    NotAuthorizedComponent,
    ResumeTmpOneComponent,
    ResumeTmpTwoComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule, // For common Angular directives like ngIf, ngFor, etc.
    ResumeRoutingModule, // The routing configuration for this module
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,

  ],
})
export class ResumeModule {}
