import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubmitExerciseComponent } from './components/submit-exercise/submit-exercise.component';
import { CorrectionViewComponent } from './components/correction-view/correction-view.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'submit-exercise', component: SubmitExerciseComponent },
  { path: 'correction', component: CorrectionViewComponent },
];
