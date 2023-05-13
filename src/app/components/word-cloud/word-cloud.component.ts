import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Wordcloud from 'highcharts/modules/wordcloud';
import { take } from 'rxjs';
import { TopicsService } from 'src/app/services/topics.service';

// Initialize the Wordcloud module
Wordcloud(Highcharts);

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

  constructor(private topicsService: TopicsService) {}

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  isChartDataAvailable = false;
  topic = {};

  ngOnInit() {
    this.topicsService.getTopics().pipe(take(1)).subscribe(topics => {
      const series: Highcharts.SeriesWordcloudOptions[] = [{
        type: 'wordcloud',
        data: topics,
        events: {
          click: (event) => {
            this.topic = event.point;
          }
        }
      }];

      this.chartOptions = {
        chart: {
          type: 'wordcloud',
          height: 550
        },
        series: series,
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        tooltip: {
          enabled: false
        }
      };
      this.isChartDataAvailable = true;
    });
  }

}