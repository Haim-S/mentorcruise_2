import Chip from "@mui/material/Chip";
import { getConnectionStatusColor } from "../../../utils/connection.util";

function ConnectStatusChip({ connect }) {
  // console.log(connect);
  const status = connect && connect.status;
  const color = getConnectionStatusColor(status);
  

  return <Chip size="small" label={status} sx={{fontSize:"0.7rem",m:1,float:"right"}} color={color} />;
}

export default ConnectStatusChip;
