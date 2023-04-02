<script>
    import CountryIcon from '$lib/components/CountryIcon.svelte'

    export let events;
    export let chronicle;

    function getSeries(id) {
        return chronicle.series.find(s => s.id === id) || {}
    }
</script>

<div class="table">
    {#each events as event}
        <div class="table-row">
            <div class="table-cell font-mono text-sm pr-2">{event.date} |{event.days}d|</div>
            <div class="table-cell pr-2"><a href="/{event.id}">{event.name}</a></div>
            <div class="table-cell pr-2">{event.region}</div>
            <div class="table-cell pr-2"><CountryIcon country={event.country} /> {event.place}</div>
            <div class="table-cell pr-2">{event.attendees ? event.attendees + ' ppl' : ''}</div>
            <div class="table-cell pr-2">{event.hackathon && event.hackathon.hackers ? event.hackathon.hackers + ' hackers' : ''}</div>
            <div class="table-cell pr-2">{event.hackathon && event.hackathon.projects ? event.hackathon.projects + ' projects' : ''}</div>
            <div class="table-cell pr-2">{event.hackathon && event.hackathon.prizes_total ? event.hackathon.prizes_total : ''}</div>
            <div class="table-cell pr-2">{event.hackathon ? event.hackathon.project_submission_platform || '' : ''}</div>
        </div>
    {/each}
</div>