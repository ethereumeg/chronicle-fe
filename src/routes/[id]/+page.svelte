<script>
	import { page } from '$app/stores';
    import EventsTable from '$lib/components/EventsTable.svelte';

    export let data;

    $: item = data.chronicle.events.find(e => e.id === $page.params.id)
    $: series = item.series ? data.chronicle.series.find(s => s.id === item.series) : null
    $: ghLink = `https://github.com/ethevents-club/chronicle/blob/main/data/events/${item.date.match(/^(\d{4})/)[1]}/${item.id}/index.yaml`
</script>

<svelte:head>
    <title>{item.name} | Chronicle: ETH events</title>
</svelte:head>

<div class="">
    <h2 class="font-bold">{item.name}</h2>
    <div>Series: {#if series}<a href="/s/{series.id}">{series.name}</a> ({series.place}){:else}-{/if}</div>
    <div class="my-2 p-2 text-sm bg-gray-100"><pre><code>{JSON.stringify(item, null, 2)}</code></pre></div>
    <hr />
    <div>Edit this page on GitHub: <a href={ghLink}>{ghLink}</a></div>
</div>