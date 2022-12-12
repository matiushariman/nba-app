import InjuryList from './InjuryList';
import { Card } from '../../../../components/ui';

const InjuryReport = () => (
  <Card className="p-5 grid gap-3 divide-y">
    <div>
      <p className="text-2xl font-bold uppercase">Injury report</p>
    </div>
    <div className="pt-5">
      <InjuryList />
    </div>
  </Card>
);

export default InjuryReport;
