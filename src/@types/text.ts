import { ComponentProps } from 'react';

export type TextProps = ComponentProps<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
};
