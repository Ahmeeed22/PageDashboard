import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ChartOptions, ChartType, ChartDataSets ,RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


// import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
// import { Label } from 'ng2-charts'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  stations:any;
  sumSales:number=0;
  totalValues:number=0;
  avgSales:number=0;
  totalTransaction:number=0;

  constructor(private _CompanyService:CompanyService) { }

  ngOnInit(): void {
    this.getstations();
  }

  getstations(){
    this._CompanyService.getAllStations().subscribe(
      (res:any)=>{this.stations=res
        res.map((item:any)=>{

// calc sum sales          
          this.sumSales += item.totalsales;
          this.sumSales.toFixed(2);
          console.log(this.sumSales)
// calc total values
          this.totalValues +=item.totalvalue
          this.totalValues.toFixed(2)
          console.log(this.totalValues)
// calc total transaction count
          this.totalTransaction +=item.totaltransactioncount
          this.totalTransaction.toFixed(2)
          console.log(this.totalTransaction)


          
        })
        console.log(res)
// calc avg sales
        let x:number = this.sumSales / res.length
        x = Math.round(x)
        this.avgSales=x

        },
        (err)=>{console.log(err)},
    )}

    // Bar chart
    barChartOptions: ChartOptions = {
      responsive: true,
    };
    barChartLabels: Label[] = ['Station', 'Station', 'Station', 'Station', 'Station', 'Station'];
    barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins = [];
  
    barChartData: ChartDataSets[] = [
      { data: [45, 37, 60, 70, 46, 33], label: 'Stations sales' }
    ];

    // Pie Chart
    public radarChartOptions: RadialChartOptions = {
      responsive: true,
    };
    public radarChartLabels: Label[] = ['station1','station2','station3','station4','station5'];
  
    public radarChartData: ChartDataSets[] = [
      { data: [0, 1, 2, 3, 4], label: 'Stations Work Hours Analysis' }
    ];
    public radarChartType: ChartType = 'radar';
}
