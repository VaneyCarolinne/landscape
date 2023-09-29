import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor(
    ) {
       
    }

    ngOnInit(): void {
        console.log('init')
    }

    ngOnDestroy(): void {
        console.log('destroy')
    }
}