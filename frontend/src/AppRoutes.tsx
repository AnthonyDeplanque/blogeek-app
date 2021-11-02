
import { Typography } from "@mui/material";
import { Route, Switch } from "react-router-dom"
import ArticlesList from "./articles/pages/ArticlesList"
import Login from "./layouts/components/Login";
import UsersList from './users/pages/UsersList'

interface AppRoutesProps { };

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  return (
    <Switch>
      <Route exact path="/"><Typography><Login /></Typography></Route>
      <Route exact path="/articles"><ArticlesList /></Route>
      <Route exact path="/users"><UsersList /></Route>
    </Switch>
  )
}

export default AppRoutes;