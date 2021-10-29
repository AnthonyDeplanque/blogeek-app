import UsersState from "../models/usersState";
import { GET_USERS_FAILURE, GET_USERS_SUCCESS, UsersActionsType } from "./usersActions";

const defaultState: UsersState | null = {
  data: null
}
export const usersReducer = (state: UsersState = defaultState, action: UsersActionsType): UsersState => {
  switch (action.type)
  {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case GET_USERS_FAILURE:
      return state;
    default:
      return state;
  }

}