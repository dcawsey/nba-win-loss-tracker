<script lang="ts">
	import { DraftSelectionType } from '$lib/types/draft';

	export let teamNickname: string;
	export let team: string;
	export let pickNumber: number;
	export let win: number;
	export let loss: number;
	export let selection: DraftSelectionType;

	const isWin = selection === DraftSelectionType.W;
	const isLoss = selection === DraftSelectionType.L;
</script>

<div class="container">
	<div>{teamNickname}</div>
	<div class="record-container">
		<span class:win={isWin}>{win}</span> - <span class:loss={isLoss}>{loss}</span>
	</div>
</div>

<style>
	div.container {
		display: flex;
	}

	div.record-container {
		margin-left: 15px;
	}

	span.win {
		color: green;
	}

	span.loss {
		color: red;
	}
</style>
