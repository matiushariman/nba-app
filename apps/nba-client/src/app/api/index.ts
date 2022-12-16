import NbaApi from '@nba-app/nba-api-client-wrapper';

const nbaApi = new NbaApi(
  process.env['NX_API_BASE_URL'] || 'http://localhost:3333'
);

export default nbaApi;
