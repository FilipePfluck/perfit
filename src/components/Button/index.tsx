import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  color?: string
  textColor?: string
}

export const Button: React.FC<ButtonProps> = ({ text, color, textColor, ...rest }) => {
  return (
    <>
      <S.Container color={color} textColor={textColor} {...rest}>
        {text}
      </S.Container>
    </>
  )
}