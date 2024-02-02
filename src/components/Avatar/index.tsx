import { useUserContext } from '../../Context/UserContext';
import { IconUser } from '../../assets/icons/IconUser';
import { Button } from './style';
import AvatarSrc from '../../assets/img/avatar.png';

export function Avatar() {
  const { isAuthenticated, handleToggleAuthentication } = useUserContext();
  return (
    <Button
      type="button"
      $isAuthenticated={isAuthenticated}
      onClick={handleToggleAuthentication}
    >
      {isAuthenticated ? <img src={AvatarSrc} alt="Avatar" /> : <IconUser />}
    </Button>
  );
}
