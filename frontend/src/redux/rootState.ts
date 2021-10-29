import ArticlesState from "../articles/models/articleState";
import UsersState from "../users/models/usersState";

export default interface RootState {
  articles: ArticlesState;
  users: UsersState;
}