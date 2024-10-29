<script lang="ts">
    import type { HomePageData } from '../types/state';
    import Selections from './Selections.svelte';
    import { load } from '../data';

    export const data = load();
</script>

<div class="container">
    {#each data.draftSelectionsWithTeamData as playerPicks}
        <Selections {playerPicks}></Selections>
    {/each}
</div>

<style>
    div.container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 100vh;
    }

    @media only screen and (max-width: 900px) {
        div.container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
    }
</style>
