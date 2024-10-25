<script lang="ts">
	import type { DraftSelectionsWithTeamData } from '$lib/types/draft';
	import TeamRecord from './TeamRecord.svelte';

	export let playerPicks: DraftSelectionsWithTeamData;
</script>

<div class="container">
	<h2>{playerPicks.player}</h2>
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

	h2.total-heading {
		margin-bottom: 30px;
	}

	div.team-record-container {
		margin: 10px 0;
	}
</style>
