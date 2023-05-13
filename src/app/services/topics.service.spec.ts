import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TopicsService } from './topics.service';
import { Topic } from '../models/topic-model';

describe('TopicsService', () => {
  let service: TopicsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule],
      providers: [TopicsService]
    });
    service = TestBed.inject(TopicsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getTopics', () => {
    it('should retrieve topics from the API', () => {
      const mockResponse = {
        topics: [
          {
            volume: 100,
            label: 'Topic 1',
            sentimentScore: 5
          },
          {
            volume: 50,
            label: 'Topic 2',
            sentimentScore: 6
          }
        ]
      };

      service.getTopics().subscribe((topics: Topic[]) => {
        expect(topics.length).toBe(2);
        expect(topics[0].volume).toBe(100);
        expect(topics[1].name).toBe('Topic 2');
        expect(topics[0].sentimentScore).toBe(5);
        expect(topics[1].sentimentScore).toBe(6);
      });

      const request = httpMock.expectOne('assets/topics.json');
      expect(request.request.method).toBe('GET');
      request.flush(mockResponse);
    });
  });


  describe('calculateWeight', () => {
    it('should calculate weight based on volume', () => {
      expect(service.calculateWeight(100)).toBe(50);
      expect(service.calculateWeight(30)).toBe(40);
      expect(service.calculateWeight(5)).toBe(10);
      expect(service.calculateWeight(500)).toBe(60);
    });
  });

  describe('calculateColor', () => {
    it('should calculate color based on sentiment score', () => {
      expect(service.calculateColor(80)).toBe('green');
      expect(service.calculateColor(50)).toBe('grey');
      expect(service.calculateColor(20)).toBe('red');
    });
  });
});