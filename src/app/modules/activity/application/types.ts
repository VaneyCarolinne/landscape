
export interface IActivity {
   
    activityId: number;
    title: string;
    type: string;
    startDate: string;
    endDate: string;
    status: string;

}

export interface IActivityOrderByDates {
    startDate: string;
    activities: IActivity[];
}