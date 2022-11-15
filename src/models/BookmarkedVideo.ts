import { strings } from "../constants/strings";

export class BookmarkedVideo {
  readonly url: string;
  readonly title: string;
  readonly thumbnailUrl: string;
  readonly videoId: string;
  readonly length: number;
  timestamp: Date;
  bookmarkTitle: string;
  checkpoints: Array<Checkpoint>;

  constructor(url: string, title: string, length: number, checkpoints: Array<Checkpoint>, currentTime?: number) {
    this.checkpoints = checkpoints.length > 0 ? checkpoints : [{
      time: currentTime || 0,
      url: `${url.split('&t')[0]}&t=${Math.round(currentTime || 0)}`,
      checkpointColor: '#EF3684'
    }];
    this.length = length;
    this.url = url;
    this.title = title;
    this.timestamp = new Date();
    this.videoId = this.getVideoId();
    this.thumbnailUrl = this.getVideoThumbnailUrl();
    this.bookmarkTitle = strings.bookmarkTitle;
  }

  /**
   * 320x180 thumbnail
   */
  private getVideoThumbnailUrl() {
    return `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
  }

  private getVideoId(): string {
    const urlObj = new URL(this.url);
    return urlObj.searchParams.get("v") || "dQw4w9WgXcQ";
  }
}

interface Checkpoint {
  time: number;
  url: string;
  checkpointTitle?: string;
  checkpointColor?: string;
}
