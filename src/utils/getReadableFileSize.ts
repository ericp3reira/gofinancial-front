import { locale } from './config';

interface FileSize {
  size: number;
  unit: 'B' | 'kB' | 'MB' | 'GB';
}

const getReadableFileSize = (filesize: FileSize): string => {
  if (filesize.size >= 1024 && filesize.unit !== 'GB') {
    const size = filesize.size / 1024;

    let unit = '' as FileSize['unit'];
    switch (filesize.unit) {
      case 'kB':
        unit = 'MB';
        break;
      case 'MB':
        unit = 'GB';
        break;
      default:
        unit = 'kB';
    }

    return getReadableFileSize({ size, unit });
  }

  return `${Intl.NumberFormat(locale).format(filesize.size)} ${filesize.unit}`;
};

export default getReadableFileSize;
