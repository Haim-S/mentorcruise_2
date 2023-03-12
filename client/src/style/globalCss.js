import {styled} from "@mui/material/styles";
import {Stack, Typography} from "@mui/material";


export const ChatPageContainer = styled(Stack)(() =>({
width: "100%",
height: "100%",
minHeight: "100vh"
}));

export const TypographyStyle = styled(Typography)(()=> ({
    "&.MuiTypography-h1": {
        fontFamily: "Inter, sans-serif",
        fontSize: "20px",
        fontWeight: 700
      },
    
      "&.MuiTypography-h2": {
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "15px"
      },
    
      "&.MuiTypography-h3": {
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        fontWeight: 500
      },
    
      "&.MuiTypography-h4": {
        fontFamily: "Inter, sans-serif",
        fontSize: "12px",
        fontWeight: 400
      },
    
      "&.MuiTypography-h5": {
        fontFamily: "Inter, sans-serif",
        fontSize: "11px",
        fontWeight: 300
      },
    
      "&.MuiTypography-paragraph": {
        fontFamily: "Inter, sans-serif",
        fontSize: "11px",
        fontWeight: 400,
        color: "#bcbcbc"
      }
}));