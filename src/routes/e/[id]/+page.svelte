<script>
	import { page } from '$app/stores';
    import EventsTable from '$lib/components/EventsTable.svelte';

    export let data;

    $: item = data.chronicle.events.find(e => e.id === $page.params.id)
    $: series = item.series ? data.chronicle.series.find(s => s.id === item.series) : null
</script>

<div class="">
    <h2 class="font-bold">{item.name}</h2>
    <div>Place: {series?.place}</div>
    <div class="my-2 p-2 text-sm bg-gray-100"><pre><code>{JSON.stringify(item, null, 2)}</code></pre></div>
</div>