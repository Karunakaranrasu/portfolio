import { Routes } from '@angular/router';
import { KAboutComponent } from './components/k-about/k-about.component';
import { KContactComponent } from './components/k-contact/k-contact.component';
import { KProjectsComponent } from './components/k-projects/k-projects.component';
import { KSkillsComponent } from './components/k-skills/k-skills.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: KAboutComponent },
  { path: 'skills', component: KSkillsComponent },
  { path: 'projects', component: KProjectsComponent },
  { path: 'contact', component: KContactComponent },
];
