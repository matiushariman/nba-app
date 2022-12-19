import LinescoresTable from './LinescoresTable';
import { Card } from '../../../../components/ui';

const Linescores = () => (
  <Card className="p-5 grid md:grid-flow-col gap-6 md:divide-x divide-y md:divide-y-0">
    <div className="md:col-span-3">
      <div className="grid gap-3 divide-y">
        <div>
          <p className="text-2xl font-bold uppercase">Linescores</p>
        </div>
        <div className="pt-5">
          <LinescoresTable />
        </div>
      </div>
    </div>
  </Card>
);

export default Linescores;
