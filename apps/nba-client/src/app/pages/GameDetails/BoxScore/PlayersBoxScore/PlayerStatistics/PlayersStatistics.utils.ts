export const getPlayingTime = (minutes: string) => {
  const mins = minutes.slice(2, 4);
  const secs = minutes.slice(5, 7);

  return `${mins}:${secs}`;
};

export const getShootingPercentage = (num: number) =>
  `${(num * 100).toFixed(1)}%`;
