import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ApiUsersComponentComponent } from './api-users-component/api-users-component.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { FormUserComponentComponent } from './form-user-component/form-user-component.component';
import { PipeUser } from './api-users-component/api-users.pipe';
import { ControlMessages } from './form-user-component/control-messages.component';
import { ValidationService } from './validation.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiUsersComponentComponent,
    FormUserComponentComponent,
    PipeUser,
    ControlMessages
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
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
  providers: [HttpService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
