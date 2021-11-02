import { FormControl, TextField, Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/system"
import MainCard from "../../common/components/MainCard";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import authActions from "../redux/authActions";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import { useEffect } from "react";
import { Users } from "../../models/Users";

interface LoginProps { }
const Login: React.FC<LoginProps> = (props) => {
  const [nick_name, setNick_name] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [user, setUser] = useState<Users | null>();
  const theme = useTheme();
  const dispatch = useDispatch();
  let auth = useTypedSelector((state: RootState) => state.authentication.data);

  const handleSubMit = () => {
    dispatch(authActions.getAuth({ nick_name, password }));
  }
  const handleLogOff = () => {
    dispatch(authActions.setNoAuth());
  }

  useEffect(() => {
    setUser(auth);
  }, [auth])

  return (

    <MainCard>
      {
        user === null
          ? (<FormControl>
            <Box >

              <TextField onChange={(e) => setNick_name(e.target.value)} type="text" name="nick_name" style={{ padding: theme.spacing(1), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} label="UserName"></TextField>
              <TextField onChange={(e) => setPassword(e.target.value)} type="password" name="password" style={{ padding: theme.spacing(1), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} label="PassWord"></TextField>

              <Box padding={theme.spacing(1)} width="100%" display="flex" flexDirection="row" justifyContent="center">
                <Button variant="contained" onClick={handleSubMit}>LogIn !</Button></Box>
            </Box>
          </FormControl >)
          : (<Box><Typography>Bienvenue, {user?.nick_name}</Typography><Button variant="contained" onClick={handleLogOff}>LogOff !</Button></Box>)
      }
    </MainCard >
  )

}

export default Login;