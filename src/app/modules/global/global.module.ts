import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ActivityModule } from '../activity/activity.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ActivityModule,
  ],
  exports: [
   
  ],
  providers: [
   
  ],
})
export class GlobalModule { }
