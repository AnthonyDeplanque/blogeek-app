
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@mui/material";

import { BULLET } from "../../common/theme/Theme";
import { Users } from "../../models/Users";

interface UserLineProps {
  user: Users;
}

const UserLine: React.FC<UserLineProps> = (props) => {
  const { user } = props;
  const theme = useTheme();
  return (<Box style={{ backgroundColor: "white" }} display="grid" gridTemplateColumns="1fr,1fr,1fr,1fr,1fr,1fr,1fr">

    <Typography>{user.nick_name}</Typography>
    <Typography>{BULLET}</Typography>
    <Typography>{user.email}</Typography>
    <Typography>{BULLET}</Typography>
    <Typography>{user.inscription_time}</Typography>
    <Typography>{BULLET}</Typography>
    <Box display="flex" flexDirection="row">{user.role && user.role.map(role => {
      return (<Typography style={{ padding: theme.spacing(1, 1, 1, 1) }}>{role}</Typography>)
    })}</Box>
  </Box>
  )
}
export default UserLine;