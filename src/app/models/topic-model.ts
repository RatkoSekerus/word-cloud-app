export class Topic {
    constructor(
        public volume: number,
        public sentiment: Sentiment,
        public name: string,
        public weight?: number,
        public color?: string,
        public sentimentScore?: number
    ) { }
}

export interface Sentiment {
    positive?: number;
    neutral?: number;
    negative?: number;
}

export interface TopicsResponse {
    topics: Array<TopicJson>;
}

export interface TopicJson {
    burst: number;
    days: Array<DayVolume>;
    id: string;
    label: string;
    pageType: PageType;
    queries: Array<Query>
    sentiment: Sentiment;
    sentimentScore: number;
    type: string;
    volume: number;
}

export interface DayVolume {
    date: string;
    volume: number;
}

export interface PageType {
    blog: number;
    facebook: number;
    forum: number;
    general: number;
    image: number;
    news: number;
    review: number;
    twitter: number;
    video: number;
}

export interface Query {
    id: number;
    name: string;
    volume: number;
}