import { VideoCameraIcon } from '@heroicons/react/24/solid';

const LiveStatus = () => (
  <span className="flex text-xs items-center gap-1 bg-red-800 text-white pl-2 pr-2 rounded">
    <VideoCameraIcon className="h-3 w-3" />
    LIVE
  </span>
);

export default LiveStatus;
