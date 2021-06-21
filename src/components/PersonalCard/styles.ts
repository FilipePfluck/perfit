import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
background-color: ${({theme})=>theme.colors.shape};
border-radius: 8px;


-webkit-box-shadow: 0px 0px 4px 0px #000000; 
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);

padding: 20px;
width: 100%;
min-height: 240px;

transition: box-shadow 0.2s;

&:hover{
  cursor: pointer;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.4);
}
`
export const Header = styled.div`
width: 100%;
display: flex;
align-items: center;

margin-bottom: 10px;

img {
  border-radius: 50%;
  margin-right: 20px;
}

`
export const ContentInfos = styled.div`
width: 100%;
`
export const Name = styled.span`
text-align: center;
font-weight: bold;
font-size: 18px;
width: 100%;
`
export const Description = styled.div`
  text-overflow: ellipsis;
`
export const Rating = styled.div``