<script>
	import { page } from '$app/stores';
    import EventsTable from '$lib/components/EventsTable.svelte';
    import CountryIcon from '$lib/components/CountryIcon.svelte'

    export let data;
    export let id;

    $: item = data.chronicle.families.find(s => s.id === $page.params.id)
    $: events = data.chronicle.events.filter(e => e.family === item.id).sort((x,y) => x.date < y.date ? 1 : -1)
</script>

<svelte:head>
    <title>{item.name} (series) | Chronicle: ETH events</title>
</svelte:head>

<div class="">
    <h2 class="font-bold">{item.name} <span class="font-normal italic">(family)</span></h2>
    <div>Place: {#if item.place}<CountryIcon country={item.country} />{item.place} ({item.region}){:else}variable{/if}</div>
</div>

<div class="mt-4">
    <h2>events ({events.length})</h2>
    <EventsTable events={events} chronicle={data.chronicle} />
</div>
<div class="mt-4">
    <div class="my-2 p-2 text-sm bg-gray-100"><pre><code>{JSON.stringify(item, null, 2)}</code></pre></div>
</div>