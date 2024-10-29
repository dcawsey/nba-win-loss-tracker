<script lang="ts">
    import { DraftSelectionType } from '../types/draft';

    export let teamNickname: string;
    export let win: number;
    export let loss: number;
    export let selection: DraftSelectionType;

    const isWin = selection === DraftSelectionType.W;
    const isLoss = selection === DraftSelectionType.L;
</script>

<div class="container">
    <div>{teamNickname}</div>
    <div class="record-container">
        <span class:win={isWin}>{win}</span> -
        <span class:loss={isLoss}>{loss}</span>
    </div>
</div>

<style>
    div.container {
        display: flex;
        width: 15vw;
    }

    div.record-container {
        margin-left: auto;
    }

    span.win {
        color: green;
    }

    span.loss {
        color: red;
    }

    @media only screen and (max-width: 900px) {
        div.container {
            display: flex;
            width: 40vw;
        }
    }

    @media only screen and (max-width: 450px) {
        div.container {
            display: flex;
            width: 70vw;
        }
    }
</style>
