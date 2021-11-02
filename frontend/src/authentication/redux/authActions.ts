import { Users } from "../../models/Users";

export const GET_AUTH = "GET_AUTH";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";
export const SET_NO_AUTH = "SET_NO_AUTH";
export const SET_NO_AUTH_SUCCESS = "SET_NO_AUTH_SUCCESS";
export const SET_NO_AUTH_FAILURE = "SET_NO_AUTH_FAILURE";

export interface getAuthAction {
  type: typeof GET_AUTH
  payload: { nick_name: string, password: string }
};

export interface getAuthSuccessAction {
  type: typeof GET_AUTH_SUCCESS,
  payload: Users
};

export interface getAuthFailureAction {
  type: typeof GET_AUTH_FAILURE,
};

export interface setNoAuthAction {
  type: typeof SET_NO_AUTH,
};
export interface setNoAuthSuccessAction {
  type: typeof SET_NO_AUTH_SUCCESS,
  payload: null;
};
export interface setNoAuthFailureAction {
  type: typeof SET_NO_AUTH_FAILURE,
};


export type AuthActionType =
  getAuthAction |
  getAuthSuccessAction |
  getAuthFailureAction |
  setNoAuthAction |
  setNoAuthSuccessAction |
  setNoAuthFailureAction;

export const authActions = {
  getAuth: ((credentials: any): getAuthAction => {
    return {
      type: GET_AUTH,
      payload: credentials
    }
  }),
  getAuthSuccess: ((user: Users): getAuthSuccessAction => {
    return {
      type: GET_AUTH_SUCCESS,
      payload: user
    }
  }),
  getAuthFailure: ((): getAuthFailureAction => {
    return {
      type: GET_AUTH_FAILURE
    }
  }),
  setNoAuth: ((): setNoAuthAction => {
    return {
      type: SET_NO_AUTH
    }
  }),
  setNoAuthSuccess: ((user: null): setNoAuthSuccessAction => {
    return {
      type: SET_NO_AUTH_SUCCESS,
      payload: user
    }
  }),
  setNoAuthFailure: ((): setNoAuthFailureAction => {
    return {
      type: SET_NO_AUTH_FAILURE
    }
  })
};

export default authActions;