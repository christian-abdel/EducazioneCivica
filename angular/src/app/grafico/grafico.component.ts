import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  apiServiceObs: Observable<Object>;
  results: any; //può contenere qualsiasi tipo di variabile
  selectedOption1: string = '2000';
  chartType1: string = 'BarChart';
  chartData1 =  [];

  selectedOption2: string = '2000';
  chartType2: string = 'PieChart';
  chartData2 =  [];

  height: string = '500';
  width: string = '750';

  opt = {
    is3D: true
  };

  continents = ['European Union', 'East Asia & Pacific', 'United States', 'Mexico', 'America', 'North Africa', 'South Africa', 'United Kingdom']

  options1 = [
      { name: "2000", value: "2000" },
      { name: "2001", value: "2001" },
      { name: "2002", value: "2002" },
      { name: "2003", value: "2003" },
      { name: "2004", value: "2004" },
      { name: "2005", value: "2005" },
      { name: "2006", value: "2006" },
      { name: "2007", value: "2007" },
      { name: "2008", value: "2008" },
      { name: "2009", value: "2009" },
      { name: "2010", value: "2010" },
      { name: "2011", value: "2011" },
      { name: "2012", value: "2012" },
      { name: "2013", value: "2013" },
      { name: "2014", value: "2014" },
      { name: "2015", value: "2015" },
      { name: "2016", value: "2016" },
      { name: "2017", value: "2017" },
      { name: "2018", value: "2018" },
      { name: "2019", value: "2019" }
    ]

  options2 = [
      { name: "2000", value: "2000" },
      { name: "2001", value: "2001" },
      { name: "2002", value: "2002" },
      { name: "2003", value: "2003" },
      { name: "2004", value: "2004" },
      { name: "2005", value: "2005" },
      { name: "2006", value: "2006" },
      { name: "2007", value: "2007" },
      { name: "2008", value: "2008" },
      { name: "2009", value: "2009" },
      { name: "2010", value: "2010" },
      { name: "2011", value: "2011" },
      { name: "2012", value: "2012" },
      { name: "2013", value: "2013" },
      { name: "2014", value: "2014" },
      { name: "2015", value: "2015" },
      { name: "2016", value: "2016" },
      { name: "2017", value: "2017" },
      { name: "2018", value: "2018" },
      { name: "2019", value: "2019" }
    ]

  constructor(
    public api: ApiService) {
  }

  submit1(): void {
    this.chartData1 = []; //svuota l'array
    this.apiServiceObs = this.api.getAnnual(); //richiede dati annual e inserisce nell' obs
    this.apiServiceObs.subscribe((data) => {
      this.results = data;
      console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        if (this.continents.includes(this.results[i]['Country Name'])) { this.chartData1.push([this.results[i]['Country Name'], parseFloat(this.results[i][this.selectedOption1])]); }
      }
      console.log(this.chartData1)
    });
  }

  submit2(): void {
    this.chartData2 = [];
    this.apiServiceObs = this.api.getPersonal();
    this.apiServiceObs.subscribe((data) => {
      this.results = data;
      console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        if (this.continents.includes(this.results[i]['Country Name'])) { this.chartData2.push([this.results[i]['Country Name'], parseFloat(this.results[i][this.selectedOption2])]); }
      }
      console.log(this.chartData2)
    });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }
}
