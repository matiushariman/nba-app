import { boxscoreHandlers } from './boxscore/handlers';
import { gamesHandlers } from './games/handlers';

export const handlers = [...boxscoreHandlers, ...gamesHandlers];
