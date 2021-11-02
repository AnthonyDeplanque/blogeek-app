
import { Typography } from "@mui/material";
import { Route, Switch } from "react-router-dom"
import ArticlesList from "./articles/pages/ArticlesList"
import UsersList from './users/pages/UsersList'

interface AppRoutesProps { };

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  return (
    <Switch>
      <Route exact path="/"><Typography>Hello World</Typography></Route>
      <Route exact path="/articles"><ArticlesList /></Route>
      <Route exact path="/users"><UsersList /></Route>
    </Switch>
  )
}

export default AppRoutes;