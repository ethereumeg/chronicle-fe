<script>
	import { page } from '$app/stores';
    import EventsTable from '$lib/components/EventsTable.svelte';
    import CountryIcon from '$lib/components/CountryIcon.svelte'

    export let data;
    export let id;

    $: item = data.chronicle.series.find(s => s.id === $page.params.id)
    $: events = data.chronicle.events.filter(e => e.series === item.id)
</script>

<svelte:head>
    <title>{item.name} (series) | Chronicle: ETH events</title>
</svelte:head>

<div class="">
    <h2 class="font-bold">{item.name} <span class="font-normal italic">(series)</span></h2>
    <div>Place: {#if item.place}<CountryIcon country={item.country} />{item.place} ({item.region}){:else}variable{/if}</div>
</div>

<div class="mt-4">
    <h2>events ({events.length})</h2>
    <EventsTable events={events} chronicle={data.chronicle} />
</div>