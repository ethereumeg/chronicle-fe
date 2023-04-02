<script>
    import { isFuture } from 'date-fns';
    import CountryIcon from '$lib/components/CountryIcon.svelte'

    export let events;
    export let chronicle;

    function getSeries(id) {
        return chronicle.series.find(s => s.id === id) || {}
    }
</script>

<div class="table">
    {#each events.sort((x, y) => x.date < y.date ? 1 : -1) as event}
        <div class="table-row {isFuture(new Date(event.date)) ? 'opacity-20' : '' }">
            <div class="table-cell font-mono text-sm pr-2">{event.date} |{event.days}d|</div>
            <div class="table-cell pr-2"><a href="/{event.id}">{event.name}</a></div>
            <div class="table-cell pr-2">{event.region}</div>
            <div class="table-cell"><CountryIcon country={event.country} /> {event.place}</div>
            <div class="table-cell">{event.attendees ? event.attendees + 'ppl' : ''}</div>
        </div>
    {/each}
</div>