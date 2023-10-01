import { NgModule } from '@angular/core';
import { DashboardComponent } from './presentation/components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { ItemCardComponent } from './presentation/components/item-card/item-card.component';
import { ModalComponent } from './presentation/components/modal/modal.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { NgxMoveableModule } from 'ngx-moveable';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

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
    NgxMoveableModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
})
export class ActivityModule { }
