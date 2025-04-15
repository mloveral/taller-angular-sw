import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-seriesListar',
  templateUrl: './seriesListar.component.html',
  styleUrls: ['./seriesListar.component.css'],
  standalone: false
})
export class SeriesListarComponent implements OnInit {
  series: Array<Serie> = [];
  totalSeasons: number = 0;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.updateAverageSeasons();
    });
  }

  updateAverageSeasons():void{
    if (this.series.length > 0){
      console.log(this.series.length)
      this.series.forEach(
        (serie) => {
          this.totalSeasons += serie.seasons;
        }
      );
      this.averageSeasons = this.totalSeasons / this.series.length
    };
  }

  ngOnInit() {
    this.getSeriesList();
  }

}
