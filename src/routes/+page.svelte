<script>
    import EventsTable from '$lib/components/EventsTable.svelte';

    export let data;
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
    <h2>events ({data.chronicle.events.length})</h2>
    <EventsTable events={data.chronicle.events} chronicle={data.chronicle} />
</div>
