import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './seriesListar/seriesListar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SeriesListarComponent],
  declarations: [SeriesListarComponent]
})
export class SerieModule { }
