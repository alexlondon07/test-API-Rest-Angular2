import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
     <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Angular2 Test - Alexander Londoño Espejo</a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
                    <li><a class="nav-link" routerLink="/user"><i class="fa fa-user"></i> API Rest (JSONPlaceholder) - Users</a></li>
                    <li><a class="nav-link" routerLink="/user-form"><i class="fa fa-book"></i> Forms</a></li>
                </ul>
            </div>
      </nav>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {


}
