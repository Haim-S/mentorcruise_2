
import {styled} from "@mui/material/styles";
import {Container, Box} from '@mui/material';


export const BoxLogin = styled(Box)(()=>({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
   

}))


export const ContainerLogin = styled(Container)(()=>({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    margin: "0%",
    
   
}))

export const ContainerSign = styled(Container)(()=>({
    display: "flex",
    flexDirection: "column",
    marginBottom: "20vw",
}))


// export const PaperLogin = styled(Paper)(()=>({
// width: "500px", height: "400px", borderRadius: "none",
// }))