import { Assignment, Home, Person, ThreeSixty } from "@material-ui/icons";
import { DrawerRouteConfig } from "./DrawerRouteConfig";

export const RoutesConfig: DrawerRouteConfig[] = [
  { id: "home", type: "item", title: "home", icon: <Home />, getUrl: () => "/" },
  { id: "articles", type: "item", title: "articles", getUrl: () => "/articles", icon: <Assignment /> },
  { id: "users", type: "item", title: "utilisateurs", getUrl: () => "/users", icon: <Person /> },
  {
    id: "test", type: "collapse", title: "test", icon: <ThreeSixty />, children: [
      { id: "test1", type: "item", title: "test1", getUrl: () => "/test1", },
      { id: "test2", type: "item", title: "test2", getUrl: () => "/test2", },
      { id: "test3", type: "item", title: "test3", getUrl: () => "/test3", },
    ]
  },
];

export default RoutesConfig;