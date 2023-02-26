import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { MatchComponent } from './match/match.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    MatchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent,
    SearchComponent,
    MatchComponent
  ]
})
export class GifsModule { }
