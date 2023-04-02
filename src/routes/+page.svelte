<script>
    import EventsTable from '$lib/components/EventsTable.svelte';
    import { isFuture } from 'date-fns';

    export let data;

    $: items = data.chronicle.events.sort((x, y) => x.date < y.date ? 1 : -1)
</script>


<svelte:head>
    <title>Chronicle: ETH events</title>
</svelte:head>

<div class="">
    <div class="flex gap-2 flex-wrap">
        {#each data.chronicle.series.sort((x,y) => x.name > y.name ? 1 : -1) as series}
            <div><a href="/s/{series.id}">{series.name}</a></div>
        {/each}
    </div>
</div>
<div class="mt-4">
    <h2 class="italic">Events ({items.length})</h2>
    <EventsTable events={items} chronicle={data.chronicle} />
</div>
