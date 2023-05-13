import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudWordMetadataComponent } from './cloud-word-metadata.component';

describe('CloudWordMetadataComponent', () => {
  let component: CloudWordMetadataComponent;
  let fixture: ComponentFixture<CloudWordMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudWordMetadataComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudWordMetadataComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the topic and check isEmptyTopic when topic is not empty', () => {
    const topic = { name: 'Topic 1', volume: 100 };
    component.topic = topic;

    expect(component.topic).toEqual(topic);
    expect(component.isEmptyTopic).toBeFalse();
  });

  it('should set the topic and check isEmptyTopic when topic is empty', () => {
    const topic = {};
    component.topic = topic;

    expect(component.topic).toEqual(topic);
    expect(component.isEmptyTopic).toBeTrue();
  });
});