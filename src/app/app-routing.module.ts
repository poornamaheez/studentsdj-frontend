import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  // { path: '', component: UserComponent},
  { path: 'login', component: UserComponent},
  { path: 'dashboard', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UserComponent,
  StudentComponent
]
