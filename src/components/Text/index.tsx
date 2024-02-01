import { TextProps } from '../../@types/text';
import { TitleElement } from './style';

export function Text({ as: Element, children, ...props }: TextProps) {
  return (
    <TitleElement as={Element} {...props}>
      {children}
    </TitleElement>
  );
}
