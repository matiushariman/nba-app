import type { GetGamesByDateRes, GetGamesRes, Game } from '@nba-app/types-nba';

export const generateGamesResponse = (
  gameDate: string,
  initialRes: GetGamesByDateRes
): GetGamesRes => {
  const {
    payload: {
      league: { id, name },
      date: { games },
    },
  } = initialRes;

  return {
    meta: {} as GetGamesRes['meta'],
    scoreboard: {
      gameDate: gameDate,
      leagueId: id,
      leagueName: name,
      games: games.map((game) => ({
        gameId: game.profile.gameId,
        gameEt: game.profile.dateTimeEt,
        gameClock: game.boxscore.periodClock,
        gameCode: game.profile.scheduleCode,
        gameStatus: game.boxscore.status,
        gameStatusText: game.boxscore.statusDesc,
        pbOdds: {} as Game['pbOdds'],
        gameTimeUTC: game.profile.utcMillis,
        ifNecessary: game.ifNecessary,
        seriesText: game.seriesText,
        seriesGameNumber: '',
        regulationPeriods: 4,
        period: Number(game.boxscore.period),
        gameLeaders: {
          homeLeaders: {
            name: game.homeTeam.pointGameLeader.profile.displayName,
            assists: game.homeTeam.pointGameLeader.statTotal.assists,
            jerseyNum: game.homeTeam.pointGameLeader.profile.jerseyNo,
            personId: Number(game.homeTeam.pointGameLeader.profile.playerId),
            points: game.homeTeam.pointGameLeader.statTotal.points,
            position: game.homeTeam.pointGameLeader.profile.position,
            rebounds: game.homeTeam.pointGameLeader.statTotal.rebs,
            teamTricode: game.homeTeam.profile.abbr,
            playerSlug: game.homeTeam.pointGameLeader.profile.code,
          },
          awayLeaders: {
            name: game.awayTeam.pointGameLeader.profile.displayName,
            assists: game.awayTeam.pointGameLeader.statTotal.assists,
            jerseyNum: game.awayTeam.pointGameLeader.profile.jerseyNo,
            personId: Number(game.awayTeam.pointGameLeader.profile.playerId),
            points: game.awayTeam.pointGameLeader.statTotal.points,
            position: game.awayTeam.pointGameLeader.profile.position,
            rebounds: game.awayTeam.pointGameLeader.statTotal.rebs,
            teamTricode: game.awayTeam.profile.abbr,
            playerSlug: game.awayTeam.pointGameLeader.profile.code,
          },
        },
        homeTeam: {
          teamId: Number(game.profile.homeTeamId),
          inBonus: null,
          losses: Number(game.homeTeam.matchup.losses),
          teamTricode: game.homeTeam.profile.abbr,
          score: game.boxscore.homeScore,
          seed: null,
          teamCity: game.homeTeam.profile.city,
          teamName: game.homeTeam.profile.name,
          wins: Number(game.homeTeam.matchup.wins),
          timeoutsRemaining: 0,
          periods: [],
        },
        awayTeam: {
          teamId: Number(game.profile.awayTeamId),
          inBonus: null,
          losses: Number(game.awayTeam.matchup.losses),
          teamTricode: game.awayTeam.profile.abbr,
          score: game.boxscore.awayScore,
          seed: null,
          teamCity: game.awayTeam.profile.city,
          teamName: game.awayTeam.profile.name,
          wins: Number(game.awayTeam.matchup.wins),
          timeoutsRemaining: 0,
          periods: [],
        },
      })),
    },
  };
};
