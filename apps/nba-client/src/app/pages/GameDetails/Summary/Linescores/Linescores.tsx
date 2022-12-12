import LinescoresTable from './LinescoresTable';
import { Card } from '../../../../components/ui';

const Linescores = () => {
  return (
    <Card className="p-5 grid gap-3 divide-y">
      <div>
        <p className="text-2xl font-bold uppercase">Linescores</p>
      </div>
      <div className="pt-5">
        <LinescoresTable />
      </div>
    </Card>
  );
};

export default Linescores;
