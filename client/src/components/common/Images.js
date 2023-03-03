
import styled from "@emotion/styled";


export const DivImage = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 30vw;
background: #2196f3;
// display: ${(props) => props.isLogin ? "flex" : "none"};

@media screen and (max-width: 1000px){
    display: none;
}
`
export const LogoImage = styled.img`
height: 150px;
 `

LogoImage.defaultProps = {
    src: "https://cdn.mentorcruise.com/img/cruise_white_small.png"
}
