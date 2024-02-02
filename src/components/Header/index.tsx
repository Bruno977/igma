import { LogoHeader } from '../../assets/icons/LogoHeader';
import { Avatar } from '../Avatar';
import { HeaderContainer } from './style';
type HeaderProps = {
  animate: boolean;
};

export function Header({ animate }: HeaderProps) {
  return (
    <HeaderContainer $animate={animate}>
      <LogoHeader />
      <Avatar />
    </HeaderContainer>
  );
}
