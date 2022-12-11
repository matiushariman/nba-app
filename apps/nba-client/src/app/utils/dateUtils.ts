import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

interface ConvertDateToEtParams {
  date?: string | number | dayjs.Dayjs | Date;
  format?: string;
}

export const convertDateToEt = ({
  date,
  format = 'MMMM D, YYYY h:mm A',
}: ConvertDateToEtParams) => dayjs(date).tz('America/Toronto').format(format);
