import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './seriesListar/seriesListar.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SeriesListarComponent],
  declarations: [SeriesListarComponent, SerieDetailComponent]
})
export class SerieModule { }
