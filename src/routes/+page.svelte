<script lang="ts">
	import Selections from '$lib/components/Selections.svelte';
	import type { HomePageData } from '$lib/types/state';

	export let data: HomePageData;
</script>

<div class="container">
	{#each data.draftSelectionsWithTeamData as playerPicks}
		<Selections {playerPicks}></Selections>
	{/each}
</div>

<style>
	div.container {
		display: flex;
		height: 100vh;
		width: 100vw;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
