

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";



export const SignButton = styled(Button)(({ theme}) => ({
    color:  "fffff",
    padding: "5px",
    margin: "7px 0",
    width: "100%",
    border: "1px solid #0071ff",
    "&:hover": {
     backgroundColor: "#2196f3",
      color: "white",
    },
  }));

  
// export const SignButton = styled(Button)(({ theme}) => ({
//     color:  "fffff",
//     padding: "5px",
//     width: "200px",
//     margin: "60px 10%",
//     borderRadius: "35px",
//     backgroundColor: blue[900],
//     border: "1px solid #0071ff",
//     "&:hover": {
//      backgroundColor: "#0062ff",
//       color: "white",
//     },
//   }));