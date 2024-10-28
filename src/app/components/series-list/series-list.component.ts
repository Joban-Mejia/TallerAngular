import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html'
})

export class SeriesListComponent implements OnInit{
  
  series: Serie[] = [];
  selectedSerie: Serie | undefined;
  averageSeasons: number = this.AverageSeasons();
  
  constructor(private serieService: SerieService) {
    this.selectedSerie = undefined;
  }
  
  ngOnInit(): void {
    this.series = this.serieService.getSeries();
  }

  onSelect(serie: Serie){
    this.selectedSerie = serie;
  }
  
  AverageSeasons():number{
    let sum = 0;
    let seasons = [];
    for (let serie of this.series){
      seasons.push(this.series[0].seasons);
      sum += serie.seasons;
    }
    return 6;
    }

}
