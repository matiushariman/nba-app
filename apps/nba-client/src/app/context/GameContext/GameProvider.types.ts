import type { ReactNode } from 'react';

export interface GameProviderProps {
  readonly isScoreHidden?: boolean;
  readonly children?: ReactNode;
}
