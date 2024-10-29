import {
    DraftSelectionType,
    type DraftPickWithTeamData,
    type DraftSelectionsWithTeamData,
} from '../types/draft';
import selections from './selections.json';
import standingsApiResponse from './standings.json';

export function load() {
    const draftSelectionsWithTeamData: DraftSelectionsWithTeamData[] = [];

    for (let i = 0; i < selections.length; i++) {
        const playerSelections = selections[i];

        const playerSelectionsWithData = playerSelections.picks.map((pick) => {
            const teamRecord = standingsApiResponse.response.find(
                ({ team }) => pick.team === team.name
            );
            return {
                ...pick,
                teamNickname: teamRecord?.team.nickname,
                win: teamRecord?.conference.win,
                loss: teamRecord?.conference.loss,
            } as DraftPickWithTeamData;
        });

        const totalPoints = playerSelectionsWithData.reduce(
            (accumulator, currentPick) => {
                const pickPoints =
                    currentPick.selection === DraftSelectionType.W
                        ? currentPick.win
                        : currentPick.loss;
                return accumulator + pickPoints;
            },
            0
        );

        draftSelectionsWithTeamData.push({
            ...playerSelections,
            picks: playerSelectionsWithData,
            total: totalPoints,
        });
    }

    return { draftSelectionsWithTeamData };
}
