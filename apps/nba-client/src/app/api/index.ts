import NbaApi from '@nba-app/nba-api-client-wrapper';

import { shouldUseMock } from '../utils/mockUtils';

const { NX_API_BASE_URL } = process.env;

const nbaApi = new NbaApi(
  NX_API_BASE_URL && !shouldUseMock ? NX_API_BASE_URL : 'http://localhost:3333'
);

export default nbaApi;
