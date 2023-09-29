import { Injectable } from '@angular/core';
import { IActivity } from '../types';

let ActivitiesDummy: IActivity[] = [
    {
        activityId : 1,
        title: "Subida al cerro catedral",
        type: "ACTIVITY",
        startDate: new Date("2022-01-22 01:30:00").toDateString(),
        endDate: new Date("2022-01-22 23:30:00").toDateString(),
        status: "IN_PROGRESS",
    },
    {
        activityId : 2,
        title: "Fiesta de espuma",
        type: "PARTY",
        startDate: new Date("2022-01-22 01:30:00").toDateString(),
        endDate: new Date("2022-01-22 23:30:00").toDateString(),
        status: "DONE",
    },
    {
        activityId: 3,
        title: "Desayuno",
        type: "FOOD",
        startDate: "",
        endDate: "",
        status: "",
    },
]

const month = {
  JAN: "Jan",
  FEB: "Feb",
  MAR: "Mar",
  APR: "Apr",
  MAY: "May",
  JUN: "Jun",
  JUL: "Jul",
  AUG: "Aug",
  SEP: "Sep",
  OCT: "Oct",
  NOV: "Nov",
  DEC: "Dec"
}


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
  ) {}
  
  modifyMonthToSpanish(): IActivity[]{
     for(let i=0; i< ActivitiesDummy.length; i++){
      if(ActivitiesDummy[i].startDate.includes(month.JAN)){
       ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.JAN, "Enero");
       ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Enero")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.FEB)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.FEB, "Febrero");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Febrero")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.MAR)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.MAR, "Marzo");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Marzo")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.APR)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.APR, "Abril");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Abril")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.MAY)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.MAY, "Mayo");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Mayo")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.JUN)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.JUN, "Junio");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Junio")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.JUL)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.JUL, "Julio");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Julio")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.AUG)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.AUG, "Agosto");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Agosto")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.SEP)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.SEP, "Septiembre");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Septiembre")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.OCT)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.OCT, "Octubre");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Octubre")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.NOV)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.NOV, "Noviembre");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Noviembre")[0],"");
      }
      if(ActivitiesDummy[i].startDate.includes(month.DEC)){
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(month.DEC, "Diciembre");
        ActivitiesDummy[i].startDate = ActivitiesDummy[i].startDate.replace(ActivitiesDummy[i].startDate.split("Diciembre")[0],"");
      }
    }
    return ActivitiesDummy;
  }

  modifyEmptyDates(): IActivity[]{
     for(let i=0; i< ActivitiesDummy.length; i++){
      if(ActivitiesDummy[i].startDate == "" || ActivitiesDummy[i].startDate == null || ActivitiesDummy[i].startDate == undefined){
        ActivitiesDummy[i].startDate = "Sin Fecha asignada"
      }
    }
    return ActivitiesDummy;
  }

  getActivities(): IActivity[]{
    ActivitiesDummy = this.modifyMonthToSpanish();
    ActivitiesDummy = this.modifyEmptyDates();
    return ActivitiesDummy;
  }

}
