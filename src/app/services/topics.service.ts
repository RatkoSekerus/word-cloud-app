import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Topic, TopicJson, TopicsResponse } from '../models/topic-model';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(protected http: HttpClient) { }

  getTopics(): Observable<Array<Topic>> {
    return this.http.get<TopicsResponse>('assets/topics.json').pipe(
      map(response => {
        const topicsJson = response.topics;
        const topics = topicsJson.map(topic => {
          return new Topic(
            topic.volume,
            topic.sentiment,
            topic.label,
            this.calculateWeight(topic.volume),
            this.calculateColor(topic.sentimentScore),
            topic.sentimentScore
          );
        });
        return topics;
      })
    ) as Observable<Topic[]>;
  }

  calculateWeight(volumeOfTopic: number): number {
    switch(true) {
      case volumeOfTopic > 150:
        return 60;
      case volumeOfTopic <= 150 && volumeOfTopic > 45:
        return 50;
      case volumeOfTopic <= 45 && volumeOfTopic > 20:
        return 40;
      case volumeOfTopic <= 20 && volumeOfTopic > 10:
        return 30;
      case volumeOfTopic <= 10 && volumeOfTopic > 5:
        return 20;
      default:
        return 10;
      
    }
  }

  calculateColor(sentimentScore: number): string {
    switch(true) {
      case sentimentScore > 60:
        return "green";
      case sentimentScore <= 60 && sentimentScore >= 40:
        return "grey";
      default:
        return "red";
    }
  }

}