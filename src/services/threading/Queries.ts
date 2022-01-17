/**
 * Queries used to communicate through different channels
 * from background to foreground and vice versa
 */
export const queries = {
    toBackground: {
        threadTest: "helloBackground",
    },
    toForeground: {
        threadTest: "helloForeground",
    }
}

/**
 * Creates the path needed to go back to foreground with the
 * background result
 * @param query
 * @return {string}
 */
export const getReturningGenericPath = (query: string): string => {
    return `back-${query}`;
}
