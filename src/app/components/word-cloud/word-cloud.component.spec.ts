import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsService } from 'src/app/services/topics.service';
import { of } from 'rxjs';
import { Topic } from 'src/app/models/topic-model';
import { HttpClientModule } from '@angular/common/http';
import { CloudWordMetadataComponent } from '../cloud-word-metadata/cloud-word-metadata.component';
import { WordCloudComponent } from './word-cloud.component';

describe('WordCloudComponent', () => {
  let component: WordCloudComponent;
  let fixture: ComponentFixture<WordCloudComponent>;
  let topicsService: TopicsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordCloudComponent, CloudWordMetadataComponent],
      providers: [TopicsService],
      imports: [HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudComponent);
    component = fixture.componentInstance;
    topicsService = TestBed.inject(TopicsService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch topics from the service and update chartOptions', () => {
    const topics = [
      new Topic(100, {}, 'Topic 1', 50, 'green', 0.8),
      new Topic(50, {}, 'Topic 2', 40, 'red', -0.4)
    ];

    spyOn(topicsService, 'getTopics').and.returnValue(of(topics));

    component.ngOnInit();

    expect(topicsService.getTopics).toHaveBeenCalled();
    expect((component.chartOptions.series as any[])[0].data).toEqual(topics);
    expect(component.isChartDataAvailable).toBe(true);
  });

});