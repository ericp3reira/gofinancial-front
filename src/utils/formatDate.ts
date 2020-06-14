import { locale } from './config';

const formatDate = (date: Date): string =>
  Intl.DateTimeFormat(locale).format(date);

export default formatDate;
