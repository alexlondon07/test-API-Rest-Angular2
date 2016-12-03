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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ApiUsersComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'user',
            component: ApiUsersComponentComponent
        }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
