import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, title: 'Login Game Store',
  },
  {
    path: 'register', component: RegisterComponent, title: 'Register on Game Store',
  },
  {
    path: '', component: HomeComponent, title: 'Game Store', children: [
      {
        path: 'register-game', component: AddGameComponent, title: 'Registrar Game'
      },
      {
        path: 'game/:categoryGame?', component: GameListComponent
      },
    ]
  },
  {
    path: '**', component: NotFoundError
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
