export enum ServerResponses {
  SERVER_ERROR = 'SERVER_ERROR',
  CONFLICT = "CONFLICT",
  REQUEST_OK = "REQUEST_OK",
  ACCESS_DENIED = "ACCESS_DENIED",
  BAD_REQUEST = "BAD_REQUEST",
  NOT_FOUND = "NOT_FOUND",
}
export enum ServerDetails {
  NO_PASSWORD = "NO_PASSWORD",
  EMAIL_ALREADY_USED = "EMAIL_ALREADY_USED",
  NICKNAME_ALREADY_USED = 'NICKNAME_ALREADY_USED',
  ERROR_CREATION = "ERROR_CREATION",
  CREATION_OK = 'CREATION_OK',
  UPDATE_OK = 'UPDATE_OK',
  DELETE_OK = 'DELETE_OK',
  NO_DATA = "NO_DATA",
  ERROR_RETRIEVING = 'ERROR_RETRIEVING',
  CHECK_CREDENTIALS = "CHECK_CREDENTIALS",
  RECONNECTION_NEEDED = "RECONNECTION_NEEDED",
  INVALID_TOKEN = "INVALID_TOKEN"
}