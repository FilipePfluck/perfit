import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 24px 0;
`

export const AvatarInput = styled.div`
    position: relative;
    width: 186px;
    align-self: center;
    margin: 0 auto;

    img{
        border-radius: 50%;
    }

    label {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 48px;
        width: 48px;
        background: ${props => props.theme.colors.primary};
        border: none;
        border-radius: 50%;
        transition: 0.2s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover{
            filter:brightness(0.8)
        }
        input {
            display: none;
        }
    }
`
export const Form = styled.form`
    width: 100%;
    margin: 32px 0;

`

export const StyledLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${({theme})=>theme.colors.title};
    font-weight: 600;
    font-size: 18px;
    margin-top: 24px;
    transition: 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`

export const AddressTextContainer = styled.div`
    margin-top: 32px;
    margin-bottom: 24px;
    max-width: 100%;
    p{
        margin-top: 8px;
        color: ${props => props.theme.colors.font};
    }
`

export const ContentForm = styled.div`

  width: 100%;

  display: flex;
  justify-content: space-around;

`

export const ButtonsForm = styled.div`

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  > button {
    max-width: 360px;
  }

  button + button {
    margin-left: 12px;
  }

`

export const PersonalDataContainer = styled.div`
  width: 50%;
  min-height: 400px;
  padding: 0 42px;
`

export const AddressContainer = styled(PersonalDataContainer)``;