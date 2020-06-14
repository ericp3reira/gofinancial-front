import { locale, currency } from './config';

const formatValue = (value: number): string =>
  Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export default formatValue;
