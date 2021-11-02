import { SubCategories } from "./Categories";
import { Comments } from "./interactions/comments";
import { UserReactions } from "./interactions/Reaction";
import { Users } from "./Users";

export interface Articles {
  id: string,
  id_user: string,
  creator?: Users,
  title: string,
  subtitle: string,
  content: string,
  date_of_write: number,
  subcategories?: SubCategories[],
  reaction?: UserReactions[],
  comments?: Comments[];
}
