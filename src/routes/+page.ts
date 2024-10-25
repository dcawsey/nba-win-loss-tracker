import selections from '$lib/data/selections.json';
import standingsApiResponse from '$lib/data/standings.json';
import {
	DraftSelectionType,
	type DraftPickWithTeamData,
	type DraftSelectionsWithTeamData
} from '$lib/types/draft';
import type { PageLoad } from './$types';

export const load = (async () => {
	const draftSelectionsWithTeamData: DraftSelectionsWithTeamData[] = [];

	for (let i = 0; i < selections.length; i++) {
		const playerSelections = selections[i];

		const playerSelectionsWithData = playerSelections.picks.map((pick) => {
			const teamRecord = standingsApiResponse.response.find(({ team }) => pick.team === team.name);
			return {
				...pick,
				teamNickname: teamRecord?.team.nickname,
				win: teamRecord?.conference.win,
				loss: teamRecord?.conference.loss
			} as DraftPickWithTeamData;
		});

		const totalPoints = playerSelectionsWithData.reduce((accumulator, currentPick) => {
			const pickPoints =
				currentPick.selection === DraftSelectionType.W ? currentPick.win : currentPick.loss;
			return accumulator + pickPoints;
		}, 0);

		draftSelectionsWithTeamData.push({
			...playerSelections,
			picks: playerSelectionsWithData,
			total: totalPoints
		});
	}

	return { draftSelectionsWithTeamData };
}) satisfies PageLoad;
