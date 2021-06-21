import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  margin-top: 32px;
  width: 100%;
  max-width: 1200px;
  padding: 24px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
`

export const NextTraining = styled.div`
  width: 100%;
  max-width: 720px;
  padding: 24px;
  margin-bottom: 48px;
  border-radius: 16px;
  background-color: ${({theme})=>theme.colors.shape};

  display: flex;
  align-items: center;

  img{
    margin-right: 16px;
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  div{
    display: flex;
    flex-direction: column;
  }

  strong{
    font-size: 24px;
    color: ${({theme}) => theme.colors.title};
  }
`