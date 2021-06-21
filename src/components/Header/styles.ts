import styled from 'styled-components';

export const Container = styled.header`
  padding: 24px;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};

` 

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 16px;
  }
`

export const Logo = styled.div`
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
 
`

export const UserActions = styled.div`

  display: flex;
  align-items: center;

  ul {
    display: flex;

    li {     
      margin-right: 20px;
      a{
        color: ${props => props.theme.colors.font};

        &:hover{
          font-weight: bold;
        }
      }      
    }
  }

  a{
    margin-left: 16px;
  }

  img {
    background-size: 52px 52px;
    border: 0;
    border-radius: 50%;
    display: block;
    position: relative;
    height: 52px;
    width: 52px;
    z-index: 0;
    cursor: pointer;
  }

  svg {
    margin-left: 20px;
    color: #202020;

    &:hover {
      cursor: pointer;
      color: #FFF;
    }
  }
  
` 