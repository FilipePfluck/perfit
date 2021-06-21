import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiArrowLeft, FiLogOut, FiMoon } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";
import Switch from 'react-switch'

import * as S from "./styles";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderProps {
  shouldGoBack?: boolean;
}

export const Header = ({ shouldGoBack }: HeaderProps) => {
  const { back } = useRouter();
  const { signOut } = useAuth();

  const { theme, toggleTheme } = useTheme()

  return (
    <S.Container>
      <S.ContainerLogo>
        {shouldGoBack && (
          <FiArrowLeft size={28} onClick={back} color="#202020" />
        )}
        <S.Logo>
          <Image
            src="/images/logo2.svg"
            alt="Logo Principal no Header"
            width={134}
            height={40}
          />
        </S.Logo>
      </S.ContainerLogo>

      <S.UserActions>
        <Switch
          onChange={()=>{toggleTheme()}}
          checked={theme.title === 'light' ? true : false}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={theme.colors.shape}
          onColor={theme.colors.green}
        />
        <Link href="/updateProfile">
          <a>
            <Image
              src="/images/fake_avatar.jpg"
              alt="Fake Avatar"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <FiLogOut size={28} onClick={signOut} />
      </S.UserActions>
    </S.Container>
  );
};
