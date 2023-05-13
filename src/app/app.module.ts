import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudWordMetadataComponent } from './components/cloud-word-metadata/cloud-word-metadata.component';
import { WordCloudComponent } from './components/word-cloud/word-cloud.component';


@NgModule({
  declarations: [
    AppComponent,
    WordCloudComponent,
    CloudWordMetadataComponent,
    WordCloudComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }