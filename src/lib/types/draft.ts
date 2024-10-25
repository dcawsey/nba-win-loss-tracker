import type { TeamData } from './team';

export enum DraftSelectionType {
	W = 'W',
	L = 'L'
}

export interface DraftPick {
	pickNumber: number;
	team: string;
	selection: DraftSelectionType;
}

export interface DraftSelections {
	player: string;
	draftPosition: number;
	picks: DraftPick[];
}

export type DraftPickWithTeamData = DraftPick & TeamData;

export interface DraftSelectionsWithTeamData extends Omit<DraftSelections, 'picks'> {
	picks: DraftPickWithTeamData[];
	total: number;
}
