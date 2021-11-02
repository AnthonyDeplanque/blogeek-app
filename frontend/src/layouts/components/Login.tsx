import { Typography, FormControl, TextField, Box } from "@mui/material";
import { useTheme } from "@mui/system";
import MainCard from "../../common/components/MainCard";
interface LoginProps { }
const Login: React.FC<LoginProps> = (props) => {

  const theme = useTheme()
  return (

    <MainCard title="Login">
      <FormControl>
        <Box padding={theme.spacing(1)}>
          <Typography>UserName</Typography>
          <TextField></TextField>
          <Typography>Password</Typography>
          <TextField></TextField>
        </Box>
      </FormControl>
    </MainCard>
  )

}

export default Login;