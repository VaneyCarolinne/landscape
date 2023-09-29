import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit, OnDestroy {

    constructor() {
    }

   
    ngOnInit(): void {
        console.log('init')
    }

   
    ngOnDestroy(): void {
        console.log('destroy')
    }
}