import { render, screen } from '../../../../../../utils/testUtils';
import PlayerStatistics from '../PlayerStatistics';

import { mockBoxcore } from '../../../../../../../mocks/boxscore/handlers';

const {
  game: {
    awayTeam: { players },
  },
} = mockBoxcore[0];
describe('pages/GameDetails/BoxScore/PlayersBoxScore/PlayersStatistics', () => {
  it('should return DNP if played === 0', () => {
    render(
      <table>
        <tbody>
          <tr>
            <PlayerStatistics played="0" statistics={players[0].statistics} />
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByText(/dnp/i)).toBeVisible();
  });

  it('should render statistics if played !== 0', () => {
    const { baseElement } = render(
      <table>
        <tbody>
          <tr>
            <PlayerStatistics played="1" statistics={players[0].statistics} />
          </tr>
        </tbody>
      </table>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
