

export async function load({ url }) {
    return {
        chronicle: (url.hostname === 'localhost')
            ? import("$lib/index.json")
            : await(await fetch("https://data.chronicle.ethevents.club/index.json")).json()
    }
}