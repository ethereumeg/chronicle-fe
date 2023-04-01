<script>
	import { page } from '$app/stores';
    import EventsTable from '$lib/components/EventsTable.svelte';

    export let data;
    export let id;

    $: item = data.chronicle.series.find(s => s.id === $page.params.id)
    $: events = data.chronicle.events.filter(e => e.series === item.id)
</script>

<div class="">
    <h2 class="font-bold">{item.name}</h2>
    <div>Place: {item.place}</div>
</div>

<div class="mt-4">
    <h2>events ({events.length})</h2>
    <EventsTable events={events} chronicle={data.chronicle} />
</div>