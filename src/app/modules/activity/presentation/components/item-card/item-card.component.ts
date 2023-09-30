import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivityService } from '../../../application/services/activities.service';
import { IActivity, IActivityOrderByDates } from '../../../application/types';


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

    activitiesByDates: IActivityOrderByDates[] = [];

   
    ngOnInit(): void {
        this.activities = this.activityService.getActivities();
        for(let i = 0; i < this.activities.length; i++){
            let activitiesByDate: IActivity[] = []
            const isADatePushed = this.activitiesByDates.filter((x) =>  x.startDate == this.activities[i].startDate );
            if(isADatePushed.length == 0){
                for(let j = 0; j < this.activities.length; j++){
                    if(this.activities[i].startDate == this.activities[j].startDate){
                        activitiesByDate.push(this.activities[j])
                    } 
                }
                let activityByDates: IActivityOrderByDates = {
                    startDate: this.activities[i].startDate,
                    activities: activitiesByDate
                }
                this.activitiesByDates.push(activityByDates);
            }    
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['activities']) {
            this.activities = changes['activities'].currentValue;
        }
    }

    ngOnDestroy(): void {
        console.log('destroy')
    }

    setActivityDate(activity: IActivity) {
        this.activityInMove = activity;
    }

    moveActivityDate(activity: IActivity) {
        this.activityInMove = activity;  
        for(let i = 0; i < this.activitiesByDates.length; i ++){
            const currentActivities = this.activitiesByDates[i].activities;
            for(let j = 0; j < currentActivities.length; j++){
                if(this.activityInMove.activityId == currentActivities[j].activityId && 
                        this.activitiesByDates[i].startDate == this.activityInMove.startDate &&
                        currentActivities[j].startDate == this.activityInMove.startDate) {
                        currentActivities.splice(j, 1);
                        this.activitiesByDates[j].activities = currentActivities;
                }
            }
        } 
        this.changeDetectorRef.detectChanges(); 
    }

    moveDateToNextActivity(activityMouseOver: IActivityOrderByDates) {   
        if(this.activityInMove){
            for(let i = 0; i < this.activitiesByDates.length; i ++){
                if(this.activitiesByDates[i].startDate == activityMouseOver.startDate){
                    this.activityInMove.startDate = activityMouseOver.startDate;
                    this.activitiesByDates[i].activities.push(this.activityInMove);
                }
            }
        }
        this.activityInMove = undefined;
        this.changeDetectorRef.detectChanges();
    }

    ngAfterViewInit(): void {
        
        this.changeDetectorRef.detectChanges();
    }
}