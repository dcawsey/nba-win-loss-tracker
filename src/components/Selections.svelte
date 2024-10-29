<script lang="ts">
    import type { DraftSelectionsWithTeamData } from '../types/draft';
    import TeamRecord from './TeamRecord.svelte';

    export let playerPicks: DraftSelectionsWithTeamData;
</script>

<div class="container">
    <h2 class="player-heading">{playerPicks.player}</h2>
    <h2 class="total-heading">{playerPicks.total}</h2>
    {#each playerPicks.picks as pick}
        <div class="team-record-container">
            <TeamRecord {...pick}></TeamRecord>
        </div>
    {/each}
</div>

<style>
    div.container {
        text-align: center;
    }

    h2.player-heading {
        margin: 0;
    }

    h2.total-heading {
        margin-bottom: 30px;
    }

    div.team-record-container {
        margin: 10px 0;
    }

    @media only screen and (max-width: 900px) {
        div.container {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 20px 0;
            align-items: center;
        }
    }
</style>
