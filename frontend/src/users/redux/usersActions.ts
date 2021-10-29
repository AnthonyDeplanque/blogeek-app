import { Users } from "../../models/Users";

export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export interface getUsersAction {
  type: typeof GET_USERS;
}
export interface getUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: Users[];
}
export interface getUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
}

export type UsersActionsType =
  getUsersAction |
  getUsersSuccessAction |
  getUsersFailureAction;

export const usersActions = {
  getUsers: ((): getUsersAction => {
    return {
      type: GET_USERS
    }
  }),
  getUsersSuccess: ((users: Users[]): getUsersSuccessAction => {
    return {
      type: GET_USERS_SUCCESS,
      payload: users,
    }
  }),
  getUsersFailure: ((): getUsersFailureAction => {
    return {
      type: GET_USERS_FAILURE
    }
  })
}

export default usersActions;