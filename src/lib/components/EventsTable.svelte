<script>
    import CountryIcon from '$lib/components/CountryIcon.svelte'
    import { isFuture } from 'date-fns'

    export let events;
    export let chronicle;

    function getItem(col='series', id) {
        return chronicle[col].find(s => s.id === id) || {}
    }
</script>

<div class="table">
    {#each events as event}
        <div class="table-row {isFuture(new Date(event.date)) ? 'opacity-20' : ''}">
            <div class="table-cell font-mono text-sm pr-2">{event.date}</div>
            <div class="table-cell font-mono text-sm pr-2">{#if event.days !== 0}|{event.days}d|{/if}</div>
            <div class="table-cell pr-2"><a href="/{event.id}">{event.name}</a></div>
            <div class="table-cell pr-2">
                {#if event.aftermovie}
                    <a href={event.aftermovie}>🎥</a>
                {/if}
            </div>
            <div class="table-cell pr-2">{event.region}</div>
            <div class="table-cell pr-2"><CountryIcon country={event.country} /> {event.place}</div>
            <div class="table-cell pr-2">
                {#if event.family}<a href="/f/{event.family}">{getItem('families', event.family).name}</a>{/if}
                {#if event.host_name}{event.host_name}{/if}
            </div>
            <div class="table-cell pr-2">{event.attendees ? event.attendees + ' ppl' : ''}</div>
            <div class="table-cell pr-2">{event.hackathon && event.hackathon.hackers ? event.hackathon.hackers + ' hackers' : ''}</div>
            <div class="table-cell pr-2">{event.hackathon && event.hackathon.projects ? event.hackathon.projects + ' projects' : ''}</div>
            <div class="table-cell pr-2">{event.hackathon && event.hackathon.prizes_total ? event.hackathon.prizes_total : ''}</div>
            <div class="table-cell pr-2">{event.hackathon ? event.hackathon.project_submission_platform || '' : ''}</div>
        </div>
    {/each}
</div>