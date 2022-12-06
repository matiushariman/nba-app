import type { PlaywrightTestConfig } from '@playwright/test';

import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  // reporter: [['html', { open: 'never' }]],
};

export default config;
