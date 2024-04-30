// angular import
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ApexTitleSubtitle, NgApexchartsModule } from 'ng-apexcharts';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { ChartDB } from 'src/app/fack-db/chartData';

// import { NgChartsModule } from "ng2-charts";

// import moment from 'moment';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexMarkers
} from 'ng-apexcharts';



// new implement
// import { DatePipe } from '@angular/common';
import { ApiService } from '../../../common/api.service';
import { AuthService } from '../../../common/auth.service';

import { id_user } from '../view/tableData';


export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;

  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule, ProductSaleComponent],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss'],

})
export default class DashAnalyticsComponent  {

  // public props
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  chartOptions_1!: Partial<ChartOptions>;
  chartOptions_2!: Partial<ChartOptions>;
  chartOptions_3!: Partial<ChartOptions>;


  // line chart for test


  line1CAC!: Partial<ChartOptions>;

  // ranges: any = {
  //   'Today': [moment(), moment()],
  //   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  //   'Last 3 Days': [moment().subtract(2, 'days'), moment()],
  //   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  //   'Last 14 Days': [moment().subtract(13, 'days'), moment()],
  //   'Last 30 Days': [moment().subtract(29, 'days'), moment()],

  // }

  // constructor
  constructor(private apiService: ApiService,private auth : AuthService) {


    this.chartDB = ChartDB;

    const {
      line1CAC,
      line3CAC,
      area1CAC,
      bar1CAC,
      chartOptions_11,
      bar2CAC,
      bar3CAC,
      bar4CAC,
      mixed1CAC,
      mixed2CAC,
      candlestickCAC,
      bubble1CAC,
      bubble2CAC,
      scatter1CAC,
      scatter2CAC,
      heatMap1CAC,
      heatMap2CAC,
      pie1CAC,
      pie2CAC,
      radialBar1CAC,
      radialBar2CAC,
      radar1CAC,
      radar2CAC
    } = this.chartDB;

    this.line1CAC = line1CAC;


    this.chartOptions = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Arts',
          data: [20, 50, 30, 60, 30, 50]
        },
        {
          name: 'Commerce',
          data: [60, 30, 65, 45, 67, 35]
        }
      ],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      colors: ['#73b4ff', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      }
    };
    this.chartOptions_1 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [39, 10],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'datk'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#4680ff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };
    this.chartOptions_2 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [20, 15],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#fff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };
    this.chartOptions_3 = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ff5370'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ff869a'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [45, 35, 60, 50, 85, 70]
        }
      ],
      yaxis: {
        min: 5,
        max: 90
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
  }

  id_user!: id_user;
  currencyGlobal!: String;
  dashboardData: any = {};
   selected: any;
  chartDB: any;
  startDate: string = ''; // Initialize startDate
  endDate: string = '';

  selectedDate: string = '0'; // Initialize selectedDate with a default value
  divContent!: string;





  //


  ngOnInit(): void {
    this.id_user = this.apiService.getlocalstorageId();
    this.getDashboardData();
    this.currencyGlobal = this.auth.getCurrency();
  }
  getDashboardData(){
    this.apiService.get('cms/dashboard?' + 'merchantId=' + this.id_user.merchantId + '&outletId=' + this.id_user.outletId).subscribe((obj: any) => {
      if (obj) {
        if (obj.data) {
          this.dashboardData = obj.data;
        }
        else {
          this.dashboardData = {};
        }
      }
      this.getAnalytics();
    }, error => {

      this.dashboardData = {};
      this.getAnalytics();
    })

  }

  getAnalytics(){

    let startDate, endDate;

    if (this.selected.startDate && this.selected.endDate) {
      startDate = this.dateFormat(this.selected.startDate);
      endDate = this.dateFormat(this.selected.endDate);
    } else {
      startDate = this.getDate(this.selectedDate); // Replace with your logic
      endDate = this.getDate("0"); // Replace with your logic
    }

    this.getDashboardDataForDateRange(startDate, endDate);

    // Update the content of the <div> based on the selectedDate
    this.updateDivContent(startDate, endDate);

  }

  dateFormat(date: any) {
    // Format the date as needed (e.g., convert to YYYY-MM-DD format)
    // Update this part to match your date format
    let dateString = String(date);
    let datechange = new Date(dateString.replace('IST', ''));
    let day = datechange.getDate();
    let month = datechange.getMonth() + 1;
    let year = datechange.getFullYear();
    // return (day > 9 ? day : "0" + day)+"-"+ (month > 9 ? month : "0" + month) + "-" + year;
    return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day);
  }
  getDate(dateCounts : string){
    let date = new Date();
    date.setDate(new Date().getDate()-Number(dateCounts));
    let getDate =  date.getUTCDate()  < 10 ? "0" + date.getUTCDate()   : date.getUTCDate();
    let getMonth = (date.getUTCMonth()+1) < 10 ? "0"+(date.getUTCMonth()+1) : (date.getUTCMonth()+1);
    let getYear = date.getUTCFullYear();
    return getYear+'-'+getMonth+'-'+getDate;
  }
  getDashboardDataForDateRange(startDate: string, endDate: string) {
    this.apiService.get('analytics/dashboard?' +
      'merchantId=' + this.id_user.merchantId +
      '&outletId=' + this.id_user.outletId +
      '&startDate=' + startDate +
      '&endDate=' + endDate)
      .subscribe((obj: any) => {
        if (obj) {
          if (obj.data) {
            Object.assign(this.dashboardData, obj.data);
          }
        }
      }, error => {

        this.dashboardData = {};
      });
  }

  updateDivContent(startDate: string, endDate: string) {
    const currentDate = new Date();

    const yesterday = new Date(currentDate);
     yesterday.setDate(currentDate.getDate() - 1);

    const threeDays = new Date(currentDate);
     threeDays.setDate(currentDate.getDate() - 2);

     const sevenDays = new Date(currentDate);
     sevenDays.setDate(currentDate.getDate() - 6);

     const  FourteenDays = new Date(currentDate);
     FourteenDays.setDate(currentDate.getDate() - 13);

     const  thirtyDays = new Date(currentDate);
     thirtyDays.setDate(currentDate.getDate() - 29);


     const dateFormat = (date: Date): string => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };


    if (startDate === this.dateFormat(currentDate)) {
      this.divContent = 'Today';
    } else if (startDate === this.dateFormat(currentDate)) {
      this.divContent = 'Today';

    }
    else if (startDate === this.dateFormat(yesterday)) {
      this.divContent = 'Yesterday';
    }
    else if (startDate === this.dateFormat(threeDays)) {
      this.divContent = 'Last 3 Days';
    }
    else if (startDate === this.dateFormat(sevenDays)) {
      this.divContent = 'Last 7 Days';
    }
    else if (startDate === this.dateFormat(FourteenDays)) {
      this.divContent = 'Last 14 Days';
    }
    else if (startDate === this.dateFormat(thirtyDays)) {
      this.divContent = 'Last 30 Days';
    }
    // else {
    //   const formattedStartDate = this.datePipe.transform(startDate, 'dd-MM-yyyy');
    //   const formattedEndDate = this.datePipe.transform(endDate, 'dd-MM-yyyy');

    //   this.divContent = formattedStartDate + ' to ' + formattedEndDate;
    // }
  }


  cards = [
    {
      background: 'bg-c-blue',
      title: 'Orders Received',
      icon: 'icon-shopping-cart',
      text: 'Completed Orders',
      number: '486',
      no: '351'
    },
    {
      background: 'bg-c-green',
      title: 'Total Sales',
      icon: 'icon-tag',
      text: 'This Month',
      number: '1641',
      no: '213'
    },
    {
      background: 'bg-c-yellow',
      title: 'Revenue',
      icon: 'icon-repeat',
      text: 'This Month',
      number: '$42,56',
      no: '$5,032'
    },
    {
      background: 'bg-c-red',
      title: 'Total Profit',
      icon: 'icon-shopping-cart',
      text: 'This Month',
      number: '$9,562',
      no: '$542'
    }
  ];

  images = [
    {
      src: 'assets/images/gallery-grid/img-grd-gal-1.jpg',
      title: 'Old Scooter',
      size: 'PNG-100KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-2.jpg',
      title: 'Wall Art',
      size: 'PNG-150KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-3.jpg',
      title: 'Microphone',
      size: 'PNG-150KB'
    }
  ];
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function moment() {
  throw new Error('Function not implemented.');
}

