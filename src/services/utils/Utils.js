export const secondsToVideoTimestamp = (seconds) => {
    if (seconds < 3600)
        return new Date(seconds * 1000).toISOString().substr(14, 5);
    return new Date(seconds * 1000).toISOString().substr(11, 8);
}