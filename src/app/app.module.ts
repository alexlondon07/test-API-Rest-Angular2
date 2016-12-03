import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ApiUsersComponentComponent } from './api-users-component/api-users-component.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { FormUserComponentComponent } from './form-user-component/form-user-component.component';
import { PipeUser } from './api-users-component/api-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ApiUsersComponentComponent,
    FormUserComponentComponent,
    PipeUser
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'user',
            component: ApiUsersComponentComponent
        },
        {
            path: 'user-form',
            component: FormUserComponentComponent
        }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
