import styled from 'styled-components'

interface ButtonProps{
  color?: string
  textColor?: string
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 60px;

  padding: 16px;
  background: ${(props) => { 
    return !!props.color 
      ? props.color 
      : props.theme.colors.primary
  }};
  border: 0;
  border-radius: 8px;

  font-size: 20px;
  font-weight: bold;
  color: ${(props) => { 
    return !!props.textColor
      ? props.textColor
      : props.theme.colors.font
  }};

  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 600px){
    font-size: 18px;
  }
`