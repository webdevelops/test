// TODO: Generate breakpoints from typescript

export interface ICustomBreakPoint {
  alias: string;
  suffix?: string;
  minWidth?: number;
  maxWidth?: number;
}

export const CUSTOM_BREAKPOINTS: Array<ICustomBreakPoint> = [
  {
    alias: 'xs',
    minWidth: 0,
    maxWidth: 599,
  },
  {
    alias: 'sm',
    minWidth: 600,
    maxWidth: 959,
  },
  {
    alias: 'md',
    minWidth: 960,
    maxWidth: 1279,
  },
  {
    alias: 'lg',
    minWidth: 1280,
    maxWidth: 1919,
  },
  {
    alias: 'xl',
    minWidth: 1920,
    maxWidth: 5000,
  },
  {
    alias: 'lt-sm',
    maxWidth: 599,
  },
  {
    alias: 'lt-md',
    maxWidth: 959,
  },
  {
    alias: 'lt-lg',
    maxWidth: 1279,
  },
  {
    alias: 'lt-xl',
    maxWidth: 1919,
  },
  {
    alias: 'gt-xs',
    minWidth: 600,
  },
  {
    alias: 'gt-sm',
    minWidth: 960,
  },
  {
    alias: 'gt-md',
    minWidth: 1280,
  },
  {
    alias: 'gt-lg',
    minWidth: 1920,
  },
  {
    alias: 'mobile',
    suffix: 'mobile',
    minWidth: 0,
    maxWidth: 599,
  },
  {
    alias: 'tablet',
    suffix: 'tablet',
    minWidth: 600,
    maxWidth: 959,
  },
  {
    alias: 'desktop',
    suffix: 'desktop',
    minWidth: 960,
    maxWidth: 5000,
  },
];
