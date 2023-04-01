export async function load() {
    const req = await fetch("https://data.chronicle.ethevents.club/index.json")
    return {
        chronicle: await req.json()
    }
}