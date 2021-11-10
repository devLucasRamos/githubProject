import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
h4 {
    margin-right: 8px;
}
`;

export const WrapperUsername = styled.div`
display: flex;
align-items: center;
margin-top: 8px;
h3 {
    margin-right: 8px;
}
`;

export const WrapperInfoUsers = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin-left: 8px;
height: 200px;

h1{
    font-size: 32px;
    font-weight: bold;
}
h3{
    font-size: 18px;
    font-weight: bold;
}
h4{
    font-size: 16px;
    font-weight: bold;
}
a{
    font-size: 18px;
    color: blue;
    font-weight: bold;
}
`;

export const WrapperImg = styled.img`
border-radius: 50%;
width: 200px;
margin: 8px;
`;