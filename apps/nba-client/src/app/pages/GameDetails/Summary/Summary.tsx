import Linescores from './Linescores';

const Summary = () => (
  <div className="container mx-auto md:pt-6 md:pb-6 grid md:grid-flow-col md:gap-4">
    <div className="md:col-span-3">statistics</div>
    <div>
      <Linescores />
    </div>
  </div>
);

export default Summary;
