import { NgModule } from '@angular/core';
import { DashboardComponent } from './presentation/components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { ItemCardComponent } from './presentation/components/item-card/item-card.component';
import { ModalComponent } from './presentation/components/modal/modal.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { NgxMoveableModule } from 'ngx-moveable';

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    ModalComponent,
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    NgxMoveableModule
  ],
})
export class ActivityModule { }
