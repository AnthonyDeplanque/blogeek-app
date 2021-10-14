export interface Role {
  id: string;
  name: string;
}

export enum ROLES {
  ROLE_USER = "ROLE_USER",
  ROLE_MODERATOR = "ROLE_MODERATOR",
  ROLE_CREATOR = 'ROLE_CREATOR',
  ROLE_ADMIN = 'ROLE_ADMIN',
}