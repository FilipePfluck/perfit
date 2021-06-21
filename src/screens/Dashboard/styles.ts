import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow:scroll;
  overflow-x:hidden;
  padding: 24px 0;

`

export const Content = styled.div`
  display: flex;
  flex: 1;
  margin-top: 24px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const ContentSearch = styled.div`
  width: 100%;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  span { 
    font-size: 22px;
    font-weight: bold;
    width: 100%;
  }

  @media (max-width: 800px){
    flex-direction: column;
    
    label{
      margin-top: 16px;
    }
  }
`

export const ContentPersonals = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 24px;

  @media (max-width: 1320px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px){
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;

  h1 {
    font-size: 28px;
  }
  p{
    margin-top: 20px;
  }
`

export const Aside = styled.aside`
  min-width: 300px;
  padding: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  border-right: 2px solid ${({ theme }) => theme.colors.shape};
  
  > span { 
    margin-bottom: 52px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 640px) {
    border-right: 0;
  }
`

