export class BookmarkedVideo {
    private readonly _url: string;
    private readonly _secondsPassed: number;
    private readonly _title: string;
    private readonly _timestamp: Date;
    private readonly _thumbnailUrl: string;
    private readonly _videoId: string;

    constructor(url: string, title: string, secondsPassed: number) {
        this._secondsPassed = secondsPassed;
        this._url = url;
        this._title = title;
        this._timestamp = new Date();
        this._videoId = this.getVideoId()
        this._thumbnailUrl = this.getVideoThumbnailUrl()
    }

    /**
     * Returns the url where we can find the 320x180 thumbnail
     * @private
     */
    private getVideoThumbnailUrl() {
        return `https://i.ytimg.com/vi/${this._videoId}/hqdefault.jpg`;
    }

    /**
     * Returns the video id from the url
     * @private
     */
    private getVideoId(): string {
        return this.url.split("&t")[0].split("?v=")[1];
    }

    /**
     * Gets the original video url with no appended (by us!) time
     */
    get url(): string {
        return this._url;
    }

    /**
     * Gets the seconds since the video started
     */
    get secondsPassed(): number {
        return this._secondsPassed;
    }

    /**
     * Gets the video title
     */
    get title(): string {
        return this._title;
    }

    /**
     * Gets the video url with the appended '?t=' at the end
     */
    get videoUrlAtSavedTime(): string {
        return `${this.url.split('&t')[0]}&t=${Math.round(this.secondsPassed)}`;
    }
}
