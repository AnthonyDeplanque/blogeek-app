import { Articles } from "../../models/Articles";

export default interface ArticlesState {
  data: Articles[] | null;
}

