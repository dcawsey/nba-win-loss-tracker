<script lang="ts">
	import type { DraftSelectionsWithTeamData } from '$lib/types/draft';
	import TeamRecord from './TeamRecord.svelte';

	export let playerPicks: DraftSelectionsWithTeamData;
</script>

<div class="container">
	<h2>{playerPicks.player}</h2>
	<h2>{playerPicks.total}</h2>
	{#each playerPicks.picks as pick}
		<TeamRecord {...pick}></TeamRecord>
	{/each}
</div>

<style>
	div.container {
		text-align: center;
	}
</style>
