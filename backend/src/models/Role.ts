/* eslint-disable no-unused-vars */
export enum ROLE {
  ROLE_USER = "ROLE_USER", // Chat actif, pas de création, pas de modération.
  ROLE_MODERATOR = "ROLE_MODERATOR", // Modération du chat, du contenu, pas de création de contenu
  ROLE_CREATOR = "ROLE_CREATOR", // création de contenu, pas de modération
  ROLE_ADMIN = "ROLE_ADMIN", // all of the above + suppression des comptes & gestion des roles.
  ROLE_MUTED = "ROLE_MUTED", // Can not post a comment
}
export interface Roles {
  id: string;
  name: ROLE;
}
