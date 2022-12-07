import type { GameCardProps } from '../GameCard.types';

export type ScoreboardProps = Omit<GameCardProps, 'gameLeaders'>;
