<script>
    import EventsTable from '$lib/components/EventsTable.svelte';

    export let data;
</script>

<div class="">
    <h2>series ({data.chronicle.series.length})</h2>
    <div class="flex gap-2">
        {#each data.chronicle.series as series}
            <div><a href="/s/{series.id}">{series.name}</a></div>
        {/each}
    </div>
</div>
<div class="mt-4">
    <h2>events ({data.chronicle.events.length})</h2>
    <EventsTable events={data.chronicle.events} chronicle={data.chronicle} />
</div>
