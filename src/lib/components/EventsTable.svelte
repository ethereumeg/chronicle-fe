<script>
    import { isFuture } from 'date-fns';

    export let events;
    export let chronicle;

    function getSeries(id) {
        return chronicle.series.find(s => s.id === id) || {}
    }
</script>

<div class="table">
    {#each events.sort((x, y) => x.date < y.date ? 1 : -1) as event}
        <div class="table-row {isFuture(new Date(event.date)) ? 'text-gray-300' : '' }">
            <div class="table-cell font-mono text-sm pr-2">{event.date}</div>
            <div class="table-cell pr-2"><a href="/{event.id}">{event.name}</a></div>
            <div class="table-cell">{getSeries(event.series).place || '-'}</div>
        </div>
    {/each}
</div>