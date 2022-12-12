import LinescoresTable from './LinescoresTable';
import TopPerformers from './TopPerformers';
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
    <div className="md:col-span-4">
      <div className="grid gap-3 divide-y pt-6 md:pl-6 md:pt-0">
        <div>
          <p className="text-2xl font-bold uppercase">Top Performers</p>
        </div>
        <div className="pt-5">
          <TopPerformers />
        </div>
      </div>
    </div>
  </Card>
);

export default Linescores;
