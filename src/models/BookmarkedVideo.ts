export class BookmarkedVideo {
    get bookmarkTitle(): string {
        return this._bookmarkTitle;
    }

    set bookmarkTitle(value: string) {
        this._bookmarkTitle = value;
    }
    private readonly _url: string;
    private readonly _secondsPassed: number;
    private readonly _title: string;
    private readonly _timestamp: Date;
    private readonly _thumbnailUrl: string;
    private readonly _videoId: string;
    private _bookmarkTitle: string;

    constructor(url: string, title: string, secondsPassed: number) {
        this._secondsPassed = secondsPassed;
        this._url = url;
        this._title = title;
        this._timestamp = new Date();
        this._videoId = this.getVideoId()
        this._thumbnailUrl = this.getVideoThumbnailUrl()
        this._bookmarkTitle = ""
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
     * Gets the datetime when the bookmark was created
     */
    get timestamp(): Date {
        return this._timestamp;
    }

    /**
     * Gets the url where we can find the video thumbnail
     * 320x180
     */
    get thumbnailUrl(): string {
        return this._thumbnailUrl;
    }

    /**
     * Gets the video id
     */
    get videoId(): string {
        return this._videoId;
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
