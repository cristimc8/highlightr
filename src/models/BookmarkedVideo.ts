export class BookmarkedVideo {
    private readonly _url: string;
    private readonly _secondsPassed: number;
    private readonly _title: string;
    private readonly _timestamp: Date;

    constructor(url: string, title: string, secondsPassed: number) {
        this._secondsPassed = secondsPassed;
        this._url = url;
        this._title = title;
        this._timestamp = new Date();
    }

    /**
     * Gets the original video url with no appended time
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
        return `${this.url.split('?t')[0]}?t=${Math.round(this.secondsPassed)}`;
    }
}
