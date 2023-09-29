import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivityService } from '../../../application/services/activities.service';
import { IActivity } from '../../../application/types';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(
        private activityService: ActivityService,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    activities: IActivity[] = [];

    activityInMove?: IActivity;

   
    ngOnInit(): void {
        this.activities = this.activityService.getActivities();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['activities']) {
            this.activities = changes['activities'].currentValue;
        }
    }

    ngOnDestroy(): void {
        console.log('destroy')
    }

    moveActivityDate(activity: IActivity) {
       this.activityInMove = activity;
    }

    moveDateToNextActivity(activityMouseOver: IActivity) {     
        if(this.activityInMove){
            this.activityInMove.startDate = activityMouseOver.startDate
        }
        this.changeDetectorRef.detectChanges();
    }

    ngAfterViewInit(): void {
        if(this.activityInMove){
            for(let i = 0; i < this.activities.length; i++){
                if(this.activityInMove.activityId == this.activities[i].activityId){
                    this.activities[i] = this.activityInMove;
                }
            }
        }
        this.changeDetectorRef.detectChanges();
    }
}