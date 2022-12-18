import Linescores from './Linescores';
import InjuryReport from './InjuryReport';
import TeamComparison from './TeamComparison';

const Summary = () => (
  <div
    data-testId="game-details-summary"
    className="container mx-auto md:pt-6 md:pb-6 grid gap-4"
  >
    <div>
      <Linescores />
    </div>
    <div>
      <div className="grid md:grid-flow-col gap-4">
        <div className="md:col-span-3">
          <TeamComparison />
        </div>
        <div>
          <div className="grid gap-4">
            <div>
              <InjuryReport />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Summary;
