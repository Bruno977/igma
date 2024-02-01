import { IconUser } from '../../assets/icons/IconUser';
import { LogoHeader } from '../../assets/icons/LogoHeader';
import { HeaderContainer, Button } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <LogoHeader />
      <Button type="button">
        <IconUser />
      </Button>
    </HeaderContainer>
  );
}
