import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { createElement, extend } from '@syncfusion/ej2-base';
import {Internationalization} from '@syncfusion/ej2-base';
import {eventsData1Y,eventsData2Y,eventsData3Y,eventsData4Y} from '../datasource';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import {
  EventSettingsModel, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService,EJ2Instance, 
} from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,DragAndDropService,ResizeService],
  
})
export class DashboardComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings1Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData1Y, null, true) };
  public eventSettings2Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData2Y, null, true) };
  public eventSettings3Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData3Y, null, true) };
  public eventSettings4Y: EventSettingsModel = { dataSource: <Object[]>extend([], eventsData4Y, null, true) };
  public showHederBar: Boolean = false;
  public views: Array<String> = ['WorkWeek'];
  public showTimeIndicator: boolean = false;

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();

  getDateHeaderText(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'E' });
  }
  onPopupOpen(args: PopupOpenEventArgs): void {

    if (args.type === 'Editor') {
      let start: DateTimePicker = (args.element.querySelector('.e-start') as EJ2Instance).ej2_instances[0] as DateTimePicker;
      start.format = "EEEE, h:mm a";
      start.dataBind();
      let end: DateTimePicker = (args.element.querySelector('.e-end') as EJ2Instance).ej2_instances[0] as DateTimePicker;
      end.format = "EEEE, h:mm a";
      end.dataBind();
      args.element.querySelectorAll('.e-round').forEach((node: HTMLElement, index: number) => {
        if (index === 0 || index === 6) {
          node.style.display = 'none';
        }
      });
    }

    if (args.type === 'QuickInfo') {
      let startDate;
      let endDate;
      let isAllDay;
      if (args.target.classList.contains('e-work-cells')) {
        startDate = (args.data as any).startTime;
        endDate = (args.data as any).endTime;
        isAllDay = (args.data as any).isAllDay;
      }
      else {
        startDate = (args.data as any).StartTime;
        endDate = (args.data as any).EndTime;
        isAllDay = (args.data as any).IsAllDay;
      }
      let details: string = '';
      let startTimeDetail: string = this.instance.formatDate(startDate, { type: 'time', skeleton: 'short' });
      let endTimeDetail: string = this.instance.formatDate(endDate, { type: 'time', skeleton: 'short' });
      let startDateDetails = this.scheduleObj.getDayNames('wide')[startDate.getDay()];
      endDate = (isAllDay) && endDate.getHours() === 0 && endDate.getMinutes() === 0 ? new Date(endDate.setDate(endDate.getDate() - 1)) : endDate;
      let endDateDetails = this.scheduleObj.getDayNames('wide')[endDate.getDay()];
      let spanLength: number = endDate.getDate() !== startDate.getDate() &&
            (endDate.getTime() - startDate.getTime()) / (60 * 60 * 1000) < 24 ? 1 : 0;
      if (isAllDay) {
        details = startDateDetails + ' (all Day)';
        if ((endDate.getTime() -startDate.getTime()) / 86400000 > 1) {
          details += ' - ' + endDateDetails + ' (all Day)';
        }
      } else if ((((endDate.getTime() - startDate.getTime()) / 86400000) >= 1 || spanLength > 0)) {
        details = startDateDetails + ' (' + startTimeDetail + ')' + ' - ' + endDateDetails + ' (' + endTimeDetail + ')';
      } else {
        details = startDateDetails + ' (' + (startTimeDetail + ' - ' + endTimeDetail) + ')';
      }
      args.element.querySelector('.e-date-time-details').textContent = details;
    }
  }

  constructor() { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  onDataBound1Y(){
    let json1Y = JSON.stringify(this.eventSettings1Y.dataSource);
    console.log(json1Y);
  }

  onDataBound2Y(){
    let json2Y = JSON.stringify(this.eventSettings2Y.dataSource);
    console.log(json2Y);
  }

  onDataBound3Y(){
    let json3Y = JSON.stringify(this.eventSettings3Y.dataSource);
    console.log(json3Y);
  }

  onDataBound4Y(){
    let json4Y = JSON.stringify(this.eventSettings4Y.dataSource);
    console.log(json4Y);
  }
  ngOnInit() {
   /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

}


