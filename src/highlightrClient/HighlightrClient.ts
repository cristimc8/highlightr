import Version from "./Version";

/**
 * Factory function for the client app
 * @class HighlightrClient
 */
export const HighlightrClient = () => {
    return {
        version: Version.current
    }
}
