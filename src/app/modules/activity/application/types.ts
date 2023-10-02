
export interface IActivity {
   
    activityId: number;
    title: string;
    type: string;
    startDate: string;
    endDate: string;
    status: string;
    initHour?: string;

}

export interface IActivityOrderByDates {
    startDate: string;
    activities: IActivity[];
}