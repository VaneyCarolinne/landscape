import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './modules/global/app/app.component';
import { ActivityModule } from './modules/activity/activity.module';
import { NgxMoveableModule } from 'ngx-moveable';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActivityModule,
    NgxMoveableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
