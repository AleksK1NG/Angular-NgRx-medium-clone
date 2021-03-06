export enum AuthActionTypes {
  REGISTER_REQUEST = '[Auth] REGISTER_REQUEST',
  REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS',
  REGISTER_ERROR = '[Auth] REGISTER_ERROR',

  LOGIN_REQUEST = '[Auth] LOGIN_REQUEST',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_ERROR = '[Auth] LOGIN_ERROR',

  GET_CURRENT_USER_REQUEST = '[Auth] GET_CURRENT_USER_REQUEST',
  GET_CURRENT_USER_SUCCESS = '[Auth] GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_ERROR = '[Auth] GET_CURRENT_USER_ERROR',

  UPDATE_USER_REQUEST = '[Auth] UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS = '[Auth] UPDATE_USER_SUCCESS',
  UPDATE_USER_ERROR = '[Auth] UPDATE_USER_ERROR',

  LOGOUT_USER = '[Auth] LOGOUT_USER',
}
