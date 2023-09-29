import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit, OnDestroy {

    constructor() {
    }

   
    ngOnInit(): void {
        console.log('init')
    }

   
    ngOnDestroy(): void {
        console.log('destroy')
    }
}