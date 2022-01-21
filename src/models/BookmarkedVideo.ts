export class BookmarkedVideo {
    readonly url: string;
    secondsPassed: number;
    readonly title: string;
    timestamp: Date;
    readonly thumbnailUrl: string;
    readonly videoId: string;
    bookmarkTitle: string;
    videoUrlAtSavedTime: string;

    constructor(url: string, title: string, secondsPassed: number) {
        this.secondsPassed = secondsPassed;
        this.url = url;
        this.title = title;
        this.timestamp = new Date();
        this.videoId = this.getVideoId()
        this.thumbnailUrl = this.getVideoThumbnailUrl()
        this.bookmarkTitle = ""
        this.videoUrlAtSavedTime = `${this.url.split('&t')[0]}&t=${Math.round(this.secondsPassed)}`;
    }

    /**
     * Returns the url where we can find the 320x180 thumbnail
     * @private
     */
    private getVideoThumbnailUrl() {
        return `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
    }

    /**
     * Returns the video id from the url
     * @private
     */
    private getVideoId(): string {
        return this.url.split("&t")[0].split("?v=")[1];
    }
}
