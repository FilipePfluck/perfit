import Image from 'next/image'

import { FiXCircle } from 'react-icons/fi'
import { useTheme } from 'styled-components';
import { hours } from '../../utils/hours';
import { weekdays } from '../../utils/weekdays';

import * as S from "./styles";

interface PersonalCardProps {
  name: string;
  lessons: {hour: number, day: number}[]
}

export const MyTrainersCard = ({
  name,
  lessons
}: PersonalCardProps) => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <S.Header>
        <Image src="/images/fake_avatar.jpg" alt="Fake avatar PersonalCard" width="60" height="60" />
        <S.Name>{name}</S.Name>
      </S.Header>
      <S.ContentInfos>
        {lessons.map(lesson => (
          <S.MyTrainerLesson>
            <div>
              <strong>{weekdays[lesson.day].longName}</strong>
              <p>{hours[lesson.hour]}</p>
            </div>
            <FiXCircle size={24} color={colors.red} onClick={()=>{}}/>
          </S.MyTrainerLesson>
        ))}
        
      </S.ContentInfos>
    </S.Container>
  );
};
