<script>
    import EventsTable from '$lib/components/EventsTable.svelte';
    import { isFuture } from 'date-fns';

    export let data;

    $: upcoming = data.chronicle.events.filter(e => isFuture(new Date(e.date))).sort((x, y) => x.date > y.date ? 1 : -1)
    $: past = data.chronicle.events.filter(e => !isFuture(new Date(e.date))).sort((x, y) => x.date < y.date ? 1 : -1)
</script>


<svelte:head>
    <title>Chronicle: ETH events</title>
</svelte:head>

<div class="">
    <div class="flex gap-2 flex-wrap">
        {#each data.chronicle.series as series}
            <div><a href="/s/{series.id}">{series.name}</a></div>
        {/each}
    </div>
</div>
<div class="mt-4">
    <h2 class="font-semibold">Upcoming Events ({upcoming.length})</h2>
    <EventsTable events={upcoming} chronicle={data.chronicle} />
</div>
<div class="mt-4">
    <h2 class="font-semibold">Past Events ({past.length})</h2>
    <EventsTable events={past} chronicle={data.chronicle} />
</div>
