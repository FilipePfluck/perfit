import Image from 'next/image'

import * as S from "./styles";

interface PersonalCardProps {
  name: string;
  description: string;
  rating: number;
}

export const PersonalCard = ({
  name,
  description,
  rating,
}: PersonalCardProps) => {
  return (
    <S.Container>
      <S.Header>
        <Image src="/images/fake_avatar.jpg" alt="Fake avatar PersonalCard" width="60" height="60" />
        <S.Name>{name}</S.Name>
      </S.Header>
      <S.ContentInfos>
        <S.Description>{description}</S.Description>
        {/*<S.Rating>{rating}</S.Rating>*/}
      </S.ContentInfos>
    </S.Container>
  );
};
